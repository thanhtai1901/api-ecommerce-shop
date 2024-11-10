import { Schema, model } from 'mongoose';
import { Icategories } from '../dto/categories.dto';

const CategoriesShema = new Schema<Icategories>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

export const Categories = model<Icategories>('categories', CategoriesShema);
