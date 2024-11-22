import mongoose from 'mongoose';

export interface Iblog {
  name: string;
  content: string;
  users_id: mongoose.Schema.Types.ObjectId;
  images: string;
  createAt: Date;
  updateAt: Date;
}

export interface creatblog {
  name: string;
  content: string;
  users_id: mongoose.Schema.Types.ObjectId;
  images: string;
  createAt: Date;
  updateAt: Date;
}
