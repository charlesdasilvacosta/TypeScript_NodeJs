import registerCtrl from './controllers/register/register.controller';

export class Routes {
    public routes(app): void {
        app.get('/', registerCtrl.test);
    }
}