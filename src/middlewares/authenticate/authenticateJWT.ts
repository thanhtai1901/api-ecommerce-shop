import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import connectRedis from '../../config/redis/redis.config';
import { Users } from '../../api/users/schema/user.schema';
import { getAccessToken } from '../token/createToken';

const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Không có token' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user as any; // Thêm kiểu tạm thời nếu cần
    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      const decoded = jwt.decode(token) as { id: string };

      if (!decoded || !decoded.id) {
        res
          .status(401)
          .json({ message: 'Token không hợp lệ hoặc không thể giải mã' });
        return;
      }

      const redisClient = connectRedis();
      const storedToken = await redisClient.get(decoded.id);

      if (!storedToken) {
        res
          .status(401)
          .json({ message: 'Token hết hạn, vui lòng đăng nhập lại' });
        return;
      }

      const user = await Users.findOne({ _id: decoded.id });
      if (!user) {
        res.status(404).json({ message: 'Người dùng không tồn tại' });
        return;
      }

      const newToken = getAccessToken(user._id, user.role);
      res.setHeader('Authorization', `Bearer ${newToken}`);
      req.user = jwt.verify(newToken, process.env.JWT_SECRET as string);
      next();
    } else {
      res.status(401).json({ message: 'Token không hợp lệ' });
    }
  }
};

export default authenticateJWT;
