import { Router } from 'express';
import { CartDetailsController } from '../controller/carts_details.controller';

const cartDetailsRouter = Router();
const cartDetailsController = new CartDetailsController();

cartDetailsRouter.get('/', (req, res) => {
  cartDetailsController.getAllCartDetails(req, res);
});

cartDetailsRouter.post('/', (req, res) => {
  cartDetailsController.createCartDetails(req, res);
});

cartDetailsRouter.get('/:id', (req, res) => {
  cartDetailsController.getCartDetailsById(req, res);
});

cartDetailsRouter.delete('/:id', (req, res) => {
  cartDetailsController.deleteCartDetailsById(req, res);
});

cartDetailsRouter.patch('/:id', (req, res) => {
  cartDetailsController.updateCartDetailsById(req, res);
});

export default cartDetailsRouter;
