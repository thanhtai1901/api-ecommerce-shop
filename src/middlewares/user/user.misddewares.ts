import { RequestHandler } from 'express';
import { IUser } from '../../api/users/dto/users.dto';

const checkrole = (roles: string[]): RequestHandler => {
  return (req, res, next) => {
    const user = req.user as IUser;
    if (user && roles.includes(user.role)) {
      next();
    }
    res
      .status(403)
      .json({ message: 'bạn không đúng role nên không thể đăng nhập' });
  };
};

export default checkrole;
