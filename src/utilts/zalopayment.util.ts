import * as CryptoJS from 'crypto-js';
import { zaloPayConfig } from '../config/zalopay/zalopay.config';
import { createHmac } from 'crypto';

export const generateMac = (data: string, key: string): string => {
  return CryptoJS.HmacSHA256(data, key).toString();
};

export const generateTransId = (): string => {
  const moment = require('moment');
  const transID = Math.floor(Math.random() * 1000000);
  return `${moment().format('YYMMDD')}_${transID}`;
};
export function createMac(appId: string, appTransId: string) {
  const key1 = zaloPayConfig.key1;
  const message = `${appId}|${appTransId}|${key1}`;

  // HMAC với thuật toán SHA256
  const hmac = createHmac('sha256', key1);
  hmac.update(message);

  // Trả về giá trị MAC
  return hmac.digest('hex');
}
export const buildOrderData = (order: any): string => {
  return (
    zaloPayConfig.app_id +
    '|' +
    order.app_trans_id +
    '|' +
    order.app_user +
    '|' +
    order.amount +
    '|' +
    order.app_time +
    '|' +
    order.embed_data +
    '|' +
    order.item
  );
};
