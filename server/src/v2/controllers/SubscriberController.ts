import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import Subscriber from '../models/SubscriberModel';
import json2csv from 'json2csv'

const CREDIT_AMOUNT = parseInt(process.env['CREDIT_AMOUNT']);

function rtGet(req: Request, res: Response, next: NextFunction) {
    Subscriber.findAll().then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

const rtExport = async (req: Request, res: Response, next: NextFunction) => {
    Subscriber.findAll().then(users => {
        const jsonUsers = JSON.parse(JSON.stringify(users));
        console.log({jsonUsers})

        const csvFields = ['id', 'name', 'email'];
        const csv =  json2csv.parse(jsonUsers,{csvFields} as unknown);
        console.log({csv})
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=users.csv");
 
        res.status(200).end(csv);
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}
function rtCreate(req: Request, res: Response, next: NextFunction) {
    req.body['createdAt'] = new Date()
    req.body['credit'] = CREDIT_AMOUNT;
    Subscriber.findOne({
        where: { email: req.body['email'] }
    }).then(result => {
        if (result) { //Already registered
            res.send(buildSuccess({user: result, new: false}));
        } else {
            //Find inviter
            Subscriber.findOne({
                where: { id: req.body['inviteId'] }
            }).then(result => {
                if (result) { 
                    return Subscriber.update({
                        credit: result.credit + CREDIT_AMOUNT,
                    }, {
                        where: {
                            id: req.body['inviteId']
                        }
                    }).then(updatedResult => {
                    })
                }
            }).catch(error => {
                console.error(error);
                res.send(buildError("GET", error));
            })
            //Create new 
            return Subscriber.create(req.body).then(result => {
                res.send(buildSuccess({user: result, new: true}));
            }).catch(error => {
                res.send(buildError("GET", error));
                console.error(error);
            })
        }
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

export default {
    routes: {
        export: rtExport,
        get: rtGet,
        create: rtCreate,
    }
}