import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel';
import { buildSuccess, buildError } from '../utils';
import bcrypt from 'bcrypt'
import PaymentModel from '../models/PaymentModel';
const Payment = PaymentModel.Payment;

function rtGet(req: Request, res: Response, next: NextFunction) {
    User.findAll({
        raw: true
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetOne(req: Request, res: Response, next: NextFunction) {
    User.findOne({
        where: { id: req.params.id }
    }).then(result => {
        //console.log(result);
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtLogin(req: Request, res: Response, next: NextFunction) {
    User.findOne({
        where: { name: req.body.login },
        attributes: ['passwordHash']
    }).then(result => {
        console.log(result);

        console.log(req.body.password, result.passwordHash)
        bcrypt.compare(req.body.password, result.passwordHash).then(status => {
            console.log('Password compare ==> [%s]', status ? 'OK' : 'WRONG');
            User.findOne({
                where: { name: req.body.login }
            }).then(result2 => {
                res.send(buildSuccess(result2));;
            }).catch(error => {
                console.error(error);
                res.send(buildError("GET", error));
            })
        })
            .catch(error => {
                console.error('Password compare ==>', error);
                res.send(buildError("GET", error));
            });
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtCreate(req: Request, res: Response, next: NextFunction) {
    bcrypt.hash(req.body.password, 10).then(hash => {
        console.log('Generate password %s"%s" ==> "%s"', req.body.password, hash);
        req.body.passwordHash = hash;
        User.create(req.body).then(result => {
            result["passwordHash"] = "";
            res.send(buildSuccess(result));
        }).catch(error => {
            res.send(buildError("GET", error));
            console.error(error);
        })
    }).catch(error => {
        console.error('Generate password %s"%s" ==>', req.body.password, error);
        console.error(error);
    });
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    console.log('rtUpdate');
    if (req.body.oldPassword !== undefined && req.body.oldPassword !== '') {
        console.log('oldPassword');
        User.findOne({
            where: { id: req.params.id },
            attributes: ['passwordHash']
        }).then(result => {
            console.log('oldPassword=================', req.body.oldPassword, ' --- ', result.passwordHash);
            bcrypt.compare(req.body.oldPassword, result.passwordHash).then(status => {
                console.log('status=================', status);
                console.log('Password compare ==> [%s]', status ? 'OK' : 'WRONG');
                if (status) {
                    bcrypt.hash(req.body.password, 10).then(hash => {
                        console.log('Generate password %s"%s" ==> "%s"', req.body.password, hash);
                        req.body.passwordHash = hash;
                        User.update(req.body, { where: { id: req.params.id } }).then(result2 => {
                            res.send(buildSuccess(req.body));
                            //console.log(result);
                        }).catch(error => {
                            res.send(buildError("GET", error));
                            console.error(error);
                        })
                    }).catch(error => {
                        console.error('Generate password %s"%s" ==>', req.body.password, error);
                        console.error(error);
                        res.send(buildError("GET", error));
                    });
                } else {
                    console.error("WRONG_PASSWORD");
                    res.send(buildError("WRONG_PASSWORD", "WRONG_PASSWORD"));
                }
            }).catch(error => {
                console.error('Generate password %s"%s" ==>', req.body.password, error);
                console.error(error);
                res.send(buildError("GET", error));
            });
        }).catch(error => {
            console.error('Generate password %s"%s" ==>', req.body.password, error);
            console.error(error);
            res.send(buildError("GET", error));
        });
    } else {
        console.log('notPassword');
        req.body.password = null
        User.update(req.body, { where: { id: req.params.id } }).then(result => {
            res.send(buildSuccess(req.body));
            //console.log(result);
        }).catch(error => {

            console.error(error);
        })
    }
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    User.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.send(buildSuccess(result));
        //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtGetUserPaymentHistory(req: Request, res: Response, next: NextFunction) {
    Payment.findAll({
        where: {
            usersId: req.params.id
        }
    }).then(result => {
        res.json(buildSuccess(result));
    })
        .catch(error => {
            res.json(buildError("payment-history", error));
        })
}

export default {
    routes: {
        get: rtGet,
        getOne: rtGetOne,
        create: rtCreate,
        update: rtUpdate,
        delete: rtDelete,
        login: rtLogin,
        getPaymentHistory: rtGetUserPaymentHistory
    }
}