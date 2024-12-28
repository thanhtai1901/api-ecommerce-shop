import { Request, Response } from 'express';
import { OrderService } from '../service/order.service'; // Đảm bảo rằng bạn đã tạo file orders.service.ts với service cho đơn hàng

const orderService = new OrderService();

export class OrderController {
  async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await orderService.getAllOrders();
      res.status(200).json({
        data: orders,
        length: orders.length,
        message: 'Lấy tất cả đơn hàng thành công',
      });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const order = await orderService.createOrder(body);
      res.status(201).json({
        data: order,
        message: 'Tạo đơn hàng thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const order = await orderService.getOrderById(id);
      res.status(200).json({
        data: order,
        message: 'Lấy đơn hàng theo ID thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async deleteOrderById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const order = await orderService.deleteOrderById(id);
      res.status(200).json({
        data: order,
        message: 'Xóa đơn hàng thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async updateOrderById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const orderData = req.body;
      const order = await orderService.updateOrderById(id, orderData);
      res.status(200).json({
        data: order,
        message: 'Cập nhật đơn hàng thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }
}
