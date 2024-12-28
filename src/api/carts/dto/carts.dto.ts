import mongoose from 'mongoose';

export interface ICarts {
  _id: mongoose.Schema.Types.ObjectId; // ID của giỏ hàng
  user_id: mongoose.Schema.Types.ObjectId; // ID của người dùng sở hữu giỏ hàng
  totals: number; // Tổng giá trị của giỏ hàng
}

export interface CreateCarts {
  user_id: mongoose.Schema.Types.ObjectId; // ID của người dùng sở hữu giỏ hàng
  totals: number; // Tổng giá trị của giỏ hàng
}
