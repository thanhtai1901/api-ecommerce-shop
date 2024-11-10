import mongoose, { mongo } from 'mongoose';

export interface IMenu {
  categories_id: mongoose.Schema.Types.ObjectId;
  name: string;
  desctiption: string;
  price: number;
  price_sale: number;
  images: string;
  notes: string;
  createAt: Date;
  updateAt: Date;
}
export interface createMenu {
  categories_id: mongoose.Schema.Types.ObjectId;
  name: string;
  desctiption: string;
  price: number;
  price_sale: number;
  images: string;
  notes: string;
}
