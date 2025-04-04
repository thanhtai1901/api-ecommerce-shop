import axios from 'axios';
import { zaloPayConfig } from '../../../config/zalopay/zalopay.config';
import { OrderRepository } from '../repository/order.repository';
import { OrderStatus } from '../schema/order.schema';
import {
  generateMac,
  generateTransId,
  buildOrderData,
  createMac,
} from '../../../utilts/zalopayment.util';
import { CallbackDto } from '../dto/payment.dto';
import { CartItem } from '../../../types/cart';
import { createHmac } from 'crypto';

interface PaymentData {
  totalAmount: number;
  paymentMethod: 'cash' | 'zalopay';
  urlCalbackSuccess?: string;
  customerId: string;
  orderDetail: any[] | CartItem[];
}

export class PaymentService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async processPayment(order: any, paymentData: PaymentData) {
    const { totalAmount, paymentMethod, urlCalbackSuccess, customerId } =
      paymentData;
    console.log('paymentData', paymentData);

    if (paymentMethod === 'zalopay') {
      const zaloOrder = {
        app_id: zaloPayConfig.app_id,
        app_trans_id: generateTransId(),
        app_user: customerId,
        app_time: Date.now(),
        item: JSON.stringify([]),
        embed_data: JSON.stringify({
          redirecturl: urlCalbackSuccess || 'https://facebook.com',
        }),
        amount: totalAmount,
        description: `Thanh toán đơn hàng ${order._id}`,
        bank_code: '',
        callback_url:
          // 'https://210f-42-115-74-118.ngrok-free.app/api/v1/order/callback', run for local
          'https://top-gear-7o5h5vkx5-anhhoangsysons-projects.vercel.app/api/v1/order/callback',
        mac: '',
      };

      const data = buildOrderData(zaloOrder);
      zaloOrder.mac = generateMac(data, zaloPayConfig.key1);

      console.log(
        'data pass to api create order of sandbox zalopay ',
        zaloOrder,
      );

      const response = await axios.post(zaloPayConfig.endpoint, null, {
        params: zaloOrder,
      });
      console.log(
        'response data from create order api from zalo ',
        response.data,
      );

      if (response.data.return_code !== 1 || !response.data.order_url) {
        await this.orderRepository.updateStatus(
          order._id,
          OrderStatus.PAYMENT_FAIL,
        );
        throw new Error(response.data.return_message || 'Lỗi từ ZaloPay');
      }

      await this.orderRepository.updateStatus(
        order._id,
        OrderStatus.PAYMENT_PENDING,
        zaloOrder.app_trans_id,
        response.data.order_url,
      );

      return { paymentUrl: response.data.order_url };
    }
  }

  async handleCallback(dto: CallbackDto) {
    const mac = generateMac(dto.data, zaloPayConfig.key2);

    if (dto.mac !== mac) {
      return { return_code: -1, return_message: 'mac not equal' };
    }

    const dataJson = JSON.parse(dto.data);

    const updatedOrder = await this.orderRepository.updateStatus(
      dataJson.app_trans_id, // Tìm bằng app_trans_id
      OrderStatus.PAYMENT_SUCCESS,
    );

    if (!updatedOrder) {
      return { return_code: -1, return_message: 'Order not found' };
    }

    console.log('Order updated:', updatedOrder);
    return { return_code: 1, return_message: 'success' };
  }

  async queryTransactionStatus(appTransId: string): Promise<any> {
    const queryData = {
      app_id: zaloPayConfig.app_id,
      app_trans_id: appTransId,
      mac: '',
    };

    const mytime = Date.now(); // Thời gian hiện tại
    // const dataToSign = `${queryData.app_id}|${queryData.app_trans_id}|${mytime}`;
    // queryData.mac = generateMac(dataToSign, zaloPayConfig.key1);

    queryData.mac = createMac(zaloPayConfig.app_id, appTransId);

    console.log('Query data:', queryData);

    try {
      const response = await axios.post(
        'https://sb-openapi.zalopay.vn/v2/query',
        null,
        {
          params: queryData,
        },
      );
      console.log('Query response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Query error:', error);
      throw new Error('Không thể truy vấn trạng thái giao dịch');
    }
  }
}
