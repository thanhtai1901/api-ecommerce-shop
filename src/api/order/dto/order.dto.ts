import mongoose, { mongo } from 'mongoose';

export interface IOrder {
  _id: string; // ID của đơn hàng
  user_id: mongoose.Schema.Types.ObjectId;
  address: string; // Địa chỉ giao hàng
  phone: string; // Số điện thoại liên hệ
  status: string; // Trạng thái của đơn hàng (ví dụ: "pending", "completed", "canceled")
  total: number; // Tổng giá trị của đơn hàng
  createdAt: Date; // Thời gian tạo đơn hàng
  updatedAt: Date; // Thời gian cập nhật đơn hàng
}

// DTO cho việc tạo đơn hàng
export interface CreateOrderDto {
  user_id: mongoose.Schema.Types.ObjectId;
  address: string; // Địa chỉ giao hàng
  phone: string; // Số điện thoại liên hệ
  status: string; // Trạng thái của đơn hàng
  total: number; // Tổng giá trị của đơn hàng
}
