import {Router, Request, Response, NextFunction} from 'express';

class Register {

    constructor() {
        this.register = this.register.bind(this);
    }

    register(req: Request, res: Response, next: NextFunction) {
    }

    test(req: Request, res: Response) {
        res.status(200).send({
            message: 'Hello World'
        });
    }
}

export default new Register();