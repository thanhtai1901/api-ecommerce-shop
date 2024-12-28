import { Request, Response } from 'express';
import { CartsService } from '../service/carts.service'; // Đảm bảo rằng đường dẫn import là chính xác

const cartsService = new CartsService();

export class CartsController {
  // Lấy tất cả giỏ hàng
  async getAllCarts(req: Request, res: Response): Promise<void> {
    try {
      const carts = await cartsService.getAllCarts();
      res.status(200).json({
        data: carts,
        length: carts.length,
        message: 'Lấy tất cả giỏ hàng thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  // Tạo giỏ hàng mới
  async createCart(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const cart = await cartsService.createCart(body);
      res.status(201).json({
        data: cart,
        message: 'Tạo giỏ hàng thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  // Lấy giỏ hàng theo ID
  async getCartById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const cart = await cartsService.getCartById(id);
      if (cart) {
        res.status(200).json({
          data: cart,
          message: 'Lấy giỏ hàng theo ID thành công',
        });
      } else {
        res.status(404).json({ message: 'Giỏ hàng không tìm thấy' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  // Xóa giỏ hàng theo ID
  async deleteCartById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deletedCart = await cartsService.deleteCartById(id);
      if (deletedCart) {
        res.status(200).json({
          message: 'Xóa giỏ hàng thành công',
        });
      } else {
        res.status(404).json({ message: 'Giỏ hàng không tìm thấy' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  // Cập nhật giỏ hàng theo ID
  async updateCartById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const cartData = req.body;
      const updatedCart = await cartsService.updateCartById(id, cartData);
      if (updatedCart) {
        res.status(200).json({
          data: updatedCart,
          message: 'Cập nhật giỏ hàng thành công',
        });
      } else {
        res.status(404).json({ message: 'Giỏ hàng không tìm thấy' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }
}
