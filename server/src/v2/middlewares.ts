import { Request, Response, NextFunction } from 'express'
import { buildError } from './utils';
//import { region } from 'firebase-functions/lib/function-builder';
//import MyRequest from './MyRequest';

export function unitTest(req: Request, res: Response, next: NextFunction) {
    req.body['decodedToken'] = { uid: "", unitTest: true };
    next()
}
