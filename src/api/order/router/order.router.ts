import { Router } from 'express';
import { OrderController } from '../controller/order.controller'; // Đảm bảo rằng bạn đã tạo file orders.controller.ts với controller cho đơn hàng

const ordersRouter = Router();
const ordersController = new OrderController();

ordersRouter.get('/', (req, res) => {
  ordersController.getAllOrders(req, res);
});

ordersRouter.post('/', (req, res) => {
  ordersController.createOrder(req, res);
});

ordersRouter.get('/:id', (req, res) => {
  ordersController.getOrderById(req, res);
});

ordersRouter.delete('/:id', (req, res) => {
  ordersController.deleteOrderById(req, res);
});

ordersRouter.patch('/:id', (req, res) => {
  ordersController.updateOrderById(req, res);
});

export default ordersRouter;
