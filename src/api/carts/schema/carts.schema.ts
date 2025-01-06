import mongoose, { Schema, model } from 'mongoose';
import { ICarts } from '../dto/carts.dto'; // Đảm bảo rằng đường dẫn import là chính xác

const cartsSchema = new Schema<ICarts>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // Tham chiếu đến model người dùng
      required: true,
    },
    totals: {
      type: Number,
      required: true,
      default: 0, // Giá trị mặc định là 0
    },
  },
  { timestamps: true }, // Tự động thêm createdAt và updatedAt
);

// Tạo model từ schema
export const Carts = model<ICarts>('carts', cartsSchema);
