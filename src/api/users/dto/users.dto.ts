import mongoose from 'mongoose';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  role: string;
  fullname: string;
  email: string;
  usersname: string;
  password: string;
  phone: number;
  address: string;
  sex: string;
  avatar: string;
  createAt: Date;
  updateAt: Date;
}
export interface createUser {
  role: string;
  fullname: string;
  email: string;
  usersname: string;
  password: string;
  phone: number;
  address: string;
  sex: string;
  avatar: string;
}
