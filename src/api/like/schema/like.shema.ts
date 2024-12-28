import mongoose, { Schema, model } from 'mongoose';
import { ILikes } from '../dto/likes.dto'; // Giả sử bạn đã định nghĩa DTO cho Like

const likesSchema = new Schema<ILikes>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // Giả sử bạn có bảng users
      required: true,
    },
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'menus', // Liên kết đến bảng menus
      required: true,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }, // Tạo trường createAt và updateAt tự động
);

export const Likes = model<ILikes>('likes', likesSchema);
