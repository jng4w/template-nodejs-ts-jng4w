import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";



export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful!'
            });
        });

        app.route('/contact')
        .get(this.contactController.getContacts);

        app.route('/contact')
        .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful!'
            });
        })
        .put((req: Request, res: Response) => {
        // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
        .delete((req: Request, res: Response) => {       
        // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    }
}