import registerCtrl from './controllers/register/register.controller';
import express from "express";

export class Routes {
    public routes(app: express.Application): void {
        app.get('/', registerCtrl.getAll);
    }
}