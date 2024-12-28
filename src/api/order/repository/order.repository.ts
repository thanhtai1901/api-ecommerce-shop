import { IOrder, CreateOrderDto } from '../dto/order.dto'; // Đảm bảo rằng bạn đã tạo file order.dto.ts với interface IOrder và CreateOrderDto
import { Order } from '../schema/order.schema'; // Đảm bảo rằng bạn đã tạo file order.schema.ts với schema cho đơn hàng

export class OrdersRepository {
  async getAllOrders(): Promise<IOrder[]> {
    return await Order.find().populate('user_id'); // Populate để lấy thông tin người dùng
  }

  async createOrder(orderData: Partial<CreateOrderDto>): Promise<IOrder> {
    const order = new Order(orderData);
    return await order.save();
  }

  async getOrderById(id: string): Promise<IOrder | null> {
    return await Order.findById(id).populate('user_id'); // Populate để lấy thông tin người dùng
  }

  async deleteOrderById(id: string): Promise<IOrder | null> {
    return await Order.findByIdAndDelete(id); // Sử dụng findByIdAndDelete để xóa đơn hàng
  }

  async updateOrderById(
    id: string,
    orderData: Partial<IOrder>,
  ): Promise<IOrder | null> {
    return await Order.findByIdAndUpdate(id, orderData, { new: true }).populate(
      'user_id',
    ); // Cập nhật và populate thông tin người dùng
  }
}
