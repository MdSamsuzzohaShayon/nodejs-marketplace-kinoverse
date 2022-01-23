import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import Service from '../models/ServiceModel';


function rtGet(req: Request, res: Response, next: NextFunction) {
    Service.findAll({
        raw: true
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetOne(req: Request, res: Response, next: NextFunction) {
    Service.findOne({
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
    Service.create(req.body).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    Service.update(req.body,{ where: { id: req.params.id } }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })   
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    Service.destroy({
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