import { Schema, model } from 'mongoose';
import { IMenu } from '../dto/menus.dto';

const menusChema = new Schema<IMenu>(
  {
    name: { type: String, required: true },
    desctiption: { type: String, required: true },
    price: { type: Number, required: true },
    price_sale: { type: Number, required: true },
    images: { type: String, required: true },
    notes: { type: String, required: true },
  },
  { timestamps: true },
);

export const Menus = model<IMenu>('menus', menusChema);
