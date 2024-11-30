import { RequestHandler } from 'express';
import usersValidations from '../../validations/users/users.validations';
import { validationesRequest } from './requestValidations.middiewares';

// Tạo middleware cho xác thực người dùng
const validationesUsers: RequestHandler = validationesRequest(
  usersValidations.validate.bind(usersValidations),
);

// Xuất middleware
export { validationesUsers };
