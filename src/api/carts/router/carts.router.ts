import { Router } from 'express';
import { CartsController } from '../controller/carts.cotroller'; // Đảm bảo rằng đường dẫn import là chính xác

const cartsRouter = Router();
const cartsController = new CartsController();

// Lấy tất cả giỏ hàng
cartsRouter.get('/', (req, res) => {
  cartsController.getAllCarts(req, res);
});

// Tạo giỏ hàng mới
cartsRouter.post('/', (req, res) => {
  cartsController.createCart(req, res);
});

// Lấy giỏ hàng theo ID
cartsRouter.get('/:id', (req, res) => {
  cartsController.getCartById(req, res);
});

// Xóa giỏ hàng theo ID
cartsRouter.delete('/:id', (req, res) => {
  cartsController.deleteCartById(req, res);
});

// Cập nhật giỏ hàng theo ID
cartsRouter.patch('/:id', (req, res) => {
  cartsController.updateCartById(req, res);
});

export default cartsRouter;
