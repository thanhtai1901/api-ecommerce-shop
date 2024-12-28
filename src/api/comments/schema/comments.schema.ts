import mongoose, { Document, Schema } from 'mongoose';
import { IComments } from '../dto/comments.dto';

const CommentsSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Mảng các đường dẫn hình ảnh
    default: [],
  },
  menu_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'menus', // Tham chiếu đến schema Menu
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
});

const Comments = mongoose.model<IComments>('Comments', CommentsSchema);

export default Comments;
