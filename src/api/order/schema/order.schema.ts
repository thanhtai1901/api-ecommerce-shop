import { Schema, model } from 'mongoose';
import { IOrder } from '../dto/order.dto'; // Đảm bảo rằng bạn đã tạo file order.dto.ts với interface IOrder

const orderSchema = new Schema<IOrder>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true }, // Liên kết với người dùng
    address: { type: String, required: true }, // Địa chỉ giao hàng
    phone: { type: String, required: true }, // Số điện thoại liên hệ
    status: {
      type: String,
      enum: ['pending', 'completed', 'canceled'], // Các trạng thái của đơn hàng
      default: 'pending', // Trạng thái mặc định
    },
    total: { type: Number, required: true }, // Tổng giá trị của đơn hàng
  },
  { timestamps: true }, // Tự động thêm createdAt và updatedAt
);

export const Order = model<IOrder>('orders', orderSchema);
