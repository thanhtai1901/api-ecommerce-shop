import mongoose from 'mongoose';

// Interface for OrderDetails document
export interface ICartsDetails {
  _id: mongoose.Schema.Types.ObjectId;
  cart_id: mongoose.Schema.Types.ObjectId;
  menu_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

// DTO for creating new order details
export interface CreateOrderDetailsDto {
  cart_id: mongoose.Schema.Types.ObjectId;
  menu_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
}
