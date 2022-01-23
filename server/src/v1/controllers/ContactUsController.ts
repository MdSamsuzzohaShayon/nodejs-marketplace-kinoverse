import { Request, Response, NextFunction } from 'express';
import { buildSuccess, buildError } from '../utils';
import ContactUs from '../models/ContactUsModel';
import nodemailer from 'nodemailer'
const  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'kinoversehelp@gmail.com',
      pass: 'create-contact-us'
    }
});
//create-contact-us


function rtCreate(req: Request, res: Response, next: NextFunction) {
    ContactUs.create(req.body).then(result => {
        const  mailOptions = {
            from: 'kinoversehelp@gmail.com',
            to: 'info@kinoverse.net',
            subject: 'kinoversehelp',
            text: "name: "+ req.body.name  + " email: "+ req.body.email  +" | company: "+ req.body.company  +" | location: "+ req.body.location  +" | service: "+ req.body.service  +" | description: " + req.body.description
        };
        console.log("start" );
        transporter.sendMail(mailOptions, function(error, info){
            console.log("finish====",info, error );
            if (error) {
                res.send(buildError("GET", error));
            } else {
                res.send(buildSuccess(result));
            }
          });
          const  mailOptions2 = {
            from: 'kinoversehelp@gmail.com',
            to: 'kinoversehelp@gmail.com',
            subject: 'kinoversehelp',
            text: "name: "+ req.body.name  + " | email: "+ req.body.email  +" | company: "+ req.body.company  +" | location: "+ req.body.location  +" | service: "+ req.body.service  +" | description: " + req.body.description
        };
          transporter.sendMail(mailOptions2, function(error, info){
            console.log("finish====", info, error);
            if (error) {
                //res.send(buildError("GET", error));
            } else {
               // res.send(buildSuccess(result));
            }
            //res.send(buildSuccess(result));
          });
        //res.send(buildSuccess(result));
    }).catch(error => {
        res.send(buildError("GET", error));
        console.error(error);
    })
}

export default {
    routes: {
        create: rtCreate,
    }
}