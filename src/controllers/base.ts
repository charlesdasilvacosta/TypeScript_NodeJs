/**
 * this class contains the methods for the database
 */

import {Router, Request, Response, NextFunction} from 'express';

abstract class BaseCtrl{

    abstract model: any;

    getAll = async (req: Request, res: Response)  => {

        // const result = await model.find();
        // res.json(result);

        res.status(200).send({
            message: 'Hello World'
        });
    }



    getById = (req: Request, res: Response) => {

    }


    update =(req: Request, res: Response) => {

    }

    delete = (req: Request, res: Response) => {

    }

    insert = (req: Request, res: Response) => {

    }

}

export default BaseCtrl;