import Joi from 'joi';
import { IUser } from '../../api/users/dto/users.dto';

const usersValidations = Joi.object<IUser>({
  usersname: Joi.string()
    .regex(/^[a-z0-9]+$/)
    .message('không được dùng dấu hoặc là kí tự đặc biệt hoặc dấu cách')
    .required(),
  password: Joi.string().required(),
  // phone: Joi.string().pattern(/^[0-9]{10,11}$/).required,
  avatar: Joi.string().required(),
  fullname: Joi.string().required(),
});

export default usersValidations;
