import mongoose from 'mongoose';

export interface IComments {
  name: string;
  content: string;
  images?: string[];
  menu_id: mongoose.Schema.Types.ObjectId;
  createAt: Date;
  updateAt: Date;
  timestamp: number;
  user_id: mongoose.Schema.Types.ObjectId;
}

export interface CreateComments {
  name: string;
  content: string;
  images?: string[];
  menu_id: mongoose.Schema.Types.ObjectId;
  user_id?: mongoose.Schema.Types.ObjectId;
}
