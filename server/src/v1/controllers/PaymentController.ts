import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import PaymentModel from '../models/PaymentModel';
import ServicePayment from '../models/ServicePaymentModel';
import StripeConfig from '../../config/stripe-config.json';
import Movie from '../models/MovieModel';
import ServiceOrder from '../models/ServiceOrderModel';
const Payment = PaymentModel.Payment

const Stripe = require('stripe');
const stripe = Stripe(StripeConfig.key);

function rtUpdatePaymentStatus(req: Request, res: Response, next: NextFunction) {
    Payment.findOne({
        where: {
            id: req.params.id
        }
    }).then(async (result:any) => {
        switch (result.status) {
            // case "start": {
            //     return Payment.update({
            //         status: "evaluation"
            //     }, {
            //         where: {
            //             id: req.params.id
            //         }
            //     }).then(rez => {
            //         res.json(buildSuccess(rez));
            //     }).catch(err => {
            //         res.json(buildError("Update status", err));
            //     })
            // }
            case "start": {
                return Payment.update({
                    status: "waiting",
                    price: req.body.price
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(rez => {
                    res.json(buildSuccess(rez));
                }).catch(err => {
                    res.json(buildError("Update status", err));
                })
            }
            case "waiting": {
                if (!result.price) throw res.send(buildError('POST', 'Missing amount to charge'))
                const paymentIntent: any = await stripe.paymentIntents.create({
                    amount: result.price,
                    currency: "USD"
                })
                if (!paymentIntent) throw res.send(buildError('POST', 'Something went wrong'))
                else {
                    return Payment.update({
                        status: "payment"
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(rez => {
                        res.send(buildSuccess(paymentIntent))
                    }).catch(err => {
                        res.json(buildError("Update status", err));
                    })
                }
            }
            case "payment": {
                res.json(buildError("UPDATE_ERROR", "payment has status payment"))
            }
        }
    })
}



function rtGet(req: Request, res: Response, next: NextFunction) {
    Payment.findAll({
        raw: true
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetByUserId(req: Request, res: Response, next: NextFunction) {
    Payment.findAll({
        where: { usersId: req.params.id }
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtGetOne(req: Request, res: Response, next: NextFunction) {
    Payment.findOne({
        where: { id: req.params.id }
    }).then(result => {
        //console.log(result);
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtCreate(req: Request, res: Response, next: NextFunction) {
    Payment.create(req.body).then(payment => {
        const ServicePaymentPromise: any[] = []
        req.body.servicesId.forEach(element => {
            ServicePaymentPromise.push(ServicePayment.create({ serviceId: element, paymentId: payment.id }))
        });
        Promise.all(ServicePaymentPromise)
            .then(result => {
                res.send(buildSuccess(result));
                //console.log(result);
            }).catch(error => {
                res.send(buildError("GET", error));
                console.error(error);
            })
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    Payment.update(req.body, { where: { id: req.params.id } }).then(result => {
        res.send(buildSuccess(result));
        //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    Payment.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.send(buildSuccess(result));
        //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

async function rtStripePayment(req: Request, res: Response, next: NextFunction) {
    let requiredData = req.body;
    if (!req.params.id) throw res.send(buildError('POST', 'Missing user id'))
    if (!requiredData.name) throw res.send(buildError('POST', 'Missing product name'))
    if (!requiredData.amount) throw res.send(buildError('POST', 'Missing amount to pay'))
    await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success', // SET url then
        cancel_url: 'https://example.com/cancel', // SET url then
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    "currency": "USD",
                    "product_data": {
                        name: req.body.name
                    },
                    unit_amount: req.body.amount
                }, quantity: 1
            },
        ],
        mode: 'payment',
    }, (err: any, data: any) => {
        if (err) res.send(buildError('POST', err))
        else if (data) {
            Payment.create({
                usersId: req.params.id,
                time: Date.now(),
                price: requiredData.amount,
                status: "start",
                transactionID: data.id
            }).then(payment => {
                res.send(buildSuccess(data))
            }).catch(error => {
                res.send(buildError("GET", error));
                console.error(error);
            })
        }
        else {
            res.send(buildError('PUT', 'Unexpected error'))
        }
    });
}

async function rtStripeStatus(req: Request, res: Response, next: NextFunction) {
    if (!req.params.id) throw res.send(buildError('PUT', 'Missing user id'))
    if (!req.body.transactionID) throw res.send(buildError('PUT', 'Missing transaction ID'));
    await stripe.paymentIntents.retrieve(
        req.body.transactionID, function (err: any, data: any) {
            if (err) res.send(buildError('PUT', err))
            else if (data) {
                Payment.create({
                    status: "payment",
                    usersId: req.params.id,
                    time: Date.now(),
                    price: data.amount,
                    transactionID: data.id,
                    cardNumber: data.charges.data[0].payment_method_details.card.last4 || null,
                    cardType: data.charges.data[0].payment_method_details.card.brand || null,
                    movieId: req.body.movieId || null,
                    serviceOrderId: req.body.serviceOrderId || null
                }).then(payment => {
                    if (req.body.movieId !== null) {
                        Movie.update({ status: "paid", }, {
                            where: { id: req.body.movieId },
                        }).then(result => {
                            //console.log(result);
                            res.send(buildSuccess(result));
                        }).catch(error => {
                            console.error(error);
                            res.send(buildError("GET", error));
                        })
                    } else if (req.body.serviceOrderId !== null) {
                        ServiceOrder.update({ status: "paid", }, {
                            where: { id: req.body.serviceOrderId },
                        }).then(result => {
                            //console.log(result);
                            res.send(buildSuccess(result));
                        }).catch(error => {
                            console.error(error);
                            res.send(buildError("GET", error));
                        })
                    } else {
                        res.send(buildSuccess(payment))
                    }


                }).catch(error => {
                    res.send(buildError("GET", error));
                    console.error(error);
                })
            }
            else {
                res.send(buildError('PUT', 'Unexpected error'))
            }
        }
    );
}

async function rtStripeCreateIntent(req: Request, res: Response) {
    try {
        if (!req.body.amount) throw res.send(buildError('POST', 'Missing amount to charge'))
        if (!req.body.currency) throw res.send(buildError('POST', 'Missing currency for charging'));
        const paymentIntent: any = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency
        })
        if (!paymentIntent) throw res.send(buildError('POST', 'Something went wrong'))
        res.send(buildSuccess(paymentIntent))
    } catch (err) {
        console.error(err);
        res.send(buildError('POST', err ))
    }
}

async function rtGetIntentStatus(req: Request, res: Response) {
    if (!req.query.transactionID) throw res.send(buildError('PUT', 'Missing transaction ID'));
    await stripe.paymentIntents.retrieve(
        req.query.transactionID, function (err: any, data: any) {
            if (err) res.send(buildError('PUT', err))
            else if (data) {
                res.send(buildSuccess(data))
            }
            else {
                res.send(buildError('PUT', 'Unexpected error'))
            }
        }
    );
}

export default {
    routes: {
        get: rtGet,
        getOne: rtGetOne,
        create: rtCreate,
        update: rtUpdate,
        delete: rtDelete,
        getByUserId: rtGetByUserId,
        updateStatus: rtUpdatePaymentStatus,
        stripe: rtStripePayment,
        updateStripe: rtStripeStatus,
        stripeCreateIntent: rtStripeCreateIntent,
        stripeIntentStatus: rtGetIntentStatus
    }
}