import mongoose, { Schema, model } from 'mongoose';
import { ICartsDetails } from '../dto/carts_details.dto';

const cartDetailsSchema = new Schema<ICartsDetails>(
  {
    cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'carts',
      required: true,
    },
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'menus',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true },
);

export const CartDetails = model<ICartsDetails>(
  'cart_details',
  cartDetailsSchema,
);
