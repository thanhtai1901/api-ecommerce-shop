import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import connectRedis from '../../config/redis/redis.config';
import { Users } from '../../api/users/schema/user.schema';
import { getAccessToken } from '../token/createToken';

const authenticateJWT: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = user;
      return next();
    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        const decoded: any = jwt.decode(token);
        const redisClient = connectRedis();
        const storeToken = await redisClient.get(decoded.id);

        if (!storeToken) {
          return res
            .status(401)
            .json({ message: 'Token hết hạn, vui lòng nhập lại' });
        }

        const user = await Users.findOne({ _id: decoded.id });
        if (!user) {
          return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        const newToken = getAccessToken(user._id, user.role);
        res.setHeader('Authorization', `Bearer ${newToken}`);
        req.user = user;
        return next();
      } else {
        return res.status(401).json({ message: 'Token không hợp lệ' });
      }
    }
  } else {
    return res.status(401).json({ message: 'Không có token' });
  }
};

export default authenticateJWT;
