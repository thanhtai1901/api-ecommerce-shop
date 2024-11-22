import mongoose, { Schema, model } from 'mongoose';
import { Iblog } from '../dto/blog.dto';

const blogSchema = new Schema<Iblog>(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    users_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    images: { type: String, required: true },
  },

  { timestamps: true },
);
export const Blog = model<Iblog>('blogs', blogSchema);
