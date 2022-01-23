import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import Movie from '../models/MovieModel';
import User from '../models/UserModel';
import AWS from 'aws-sdk';
import s3config from '../../s3Admin';
interface MulterRequest extends Request {
    files: any;
}

function rtGet(req: Request, res: Response, next: NextFunction) {
    Movie.findAll({
        include:  [User]
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetByUserId(req: Request, res: Response, next: NextFunction) {
    Movie.findAll({
        where: { usersId: req.params.id }
    }).then(result => {
        res.send(buildSuccess(result));
    }).catch(error => {
        console.error(error);
        res.send(buildError("GET", error));
    })
}


function rtGetOne(req: Request, res: Response, next: NextFunction) {
    Movie.findOne({
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
    req.body['createdAt'] = new Date()
    Movie.create(req.body).then(result => {

        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtUpdate(req: Request, res: Response, next: NextFunction) {
    Movie.update(req.body,{ where: { id: req.params.id } }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })   
}

function rtDelete(req: Request, res: Response, next: NextFunction) {
    Movie.destroy({
        where: { id: req.params.id } 
    }).then(result => {
        res.send(buildSuccess(result));
       //console.log(result);
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

function rtFile(req: MulterRequest, res: Response, next: NextFunction) {
    console.log("body ---------------------------", req.body )
    console.log("files ---------------------------", req.files )
    const s3 = new AWS.S3(s3config);
    s3.upload({
        Bucket: "kinoverse-prod/"+req.body,
        Key: req.files.file.name,
        Body: req.files.file.data ,
        ContentType: req.files.file.mimetype,
        ContentLength: req.files.file.size,
        ACL: 'public-read'
    }, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            res.send(buildError("AWS_PDF_ERROR", err.stack));
        } else {
            console.log("Done");
            res.send(buildSuccess({ url: data.Location }));
        }
    });
}

export default {
    routes: {
        get: rtGet,
        getOne: rtGetOne,
        create: rtCreate,
        update: rtUpdate,
        delete: rtDelete,
        getByUserId: rtGetByUserId,
        file: rtFile
    }
}