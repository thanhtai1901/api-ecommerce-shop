import { Redis } from 'ioredis';
let redisClient: Redis | null;
const connectRedis = () => {
  if (!redisClient) {
    redisClient = new Redis({
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      port: process.env.REDIS_PORT
        ? parseInt(process.env.REDIS_PORT)
        : undefined,
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });
    redisClient.on('connect', () => {
      console.log('ket noi redis thanh cong');
    });
    redisClient.on('error', () => {
      console.log(' ket noi Redis that bai roi di ngu di');
    });
  }
  return redisClient;
};
export default connectRedis;
