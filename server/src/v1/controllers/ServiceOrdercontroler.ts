import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import ServiceOrder from '../models/ServiceOrderModel';
import User from '../models/UserModel';
import ServicePayment from '../models/ServicePaymentModel';
import Service from '../models/ServiceModel';


function rtGet(req: Request, res: Response, next: NextFunction) {
    ServiceOrder.findAll({
        include: [ { model: User ,as: 'User'}, { model: Service ,as: 'services'}]
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtGetByUserId(req: Request, res: Response, next: NextFunction) {
    ServiceOrder.findAll({
        where: { usersId: req.params.id },
        include: [ { model: User ,as: 'User'}, { model: Service ,as: 'services'}]
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetOne(req: Request, res: Response, next: NextFunction) {
    ServiceOrder.findOne({
        where: { id: req.params.id },
        include:  [User]
    }).then(result => {
       //console.log(result);
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}

function rtCreate(req: Request, res: Response, next: NextFunction) {
    let servicePayment:any[] = []
    req.body['createdAt'] = new Date()
    ServiceOrder.create(req.body).then(result => {
        req.body.servicesId.forEach(element => {
            servicePayment.push(ServicePayment.create({serviceId:element, servicesordersid : result.id}))

        });
        Promise.all(servicePayment).then(result2 => {
            ServiceOrder.findOne({
                where: { id: result.id },
                include: [ { model: User ,as: 'User'}, { model: Service ,as: 'services'}]
            }).then(result3 => {
               //console.log(result);
                res.send(buildSuccess(result3));
            }).catch(error => {
                console.error(error);
                res.send(buildError("GET", error));
            })
           //console.log(result);
        }).catch(error => {
            res.send(buildError("GET", error));
            console.error(error);
        })
        
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    ServiceOrder.update(req.body,{ where: { id: req.params.id } }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })   
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    ServiceOrder.destroy({
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
        delete: rtDelete,
        getByUserId: rtGetByUserId
    }
}