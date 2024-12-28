import mongoose from 'mongoose';

export interface ILikes {
  _id: mongoose.Schema.Types.ObjectId; // ID của lượt thích
  user_id: mongoose.Schema.Types.ObjectId; // ID của người dùng đã thích
  menu_id: mongoose.Schema.Types.ObjectId; // ID của thực đơn được thích
  createAt: Date; // Thời gian tạo lượt thích
  count: Number;
}

// DTO để tạo mới lượt thích
export interface CreateLikes {
  user_id: mongoose.Schema.Types.ObjectId; // ID của người dùng đã thích
  menu_id: mongoose.Schema.Types.ObjectId; // ID của thực đơn được thích
  count: Number;
}
