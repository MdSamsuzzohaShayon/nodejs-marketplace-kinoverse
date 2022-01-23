import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import ServicePayment from '../models/ServicePaymentModel';


function rtGet(req: Request, res: Response, next: NextFunction) {
    ServicePayment.findAll({
        raw: true
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetOne(req: Request, res: Response, next: NextFunction) {
    ServicePayment.findOne({
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
    ServicePayment.create(req.body).then(result => {
        // req.body
        // WatchPromise.push(CheckGoods.create({ ...element, checkId: result.id }))
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    ServicePayment.update(req.body,{ where: { id: req.params.id } }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })   
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    ServicePayment.destroy({
        where: { id: req.params.id } 
    }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

export default {
    routes: {
        get: rtGet,
        getOne: rtGetOne,
        create: rtCreate,
        update: rtUpdate,
        delete: rtDelete
    }
}