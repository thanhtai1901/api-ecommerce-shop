import { IVoucher, createVoucher } from '../dto/vocher.dto';
import { VouchersRepository } from '../repository/vouchers.repository';

export class VouchersService {
  private vouchersRepository = new VouchersRepository();

  async createVoucher(
    voucherData: Partial<createVoucher>,
  ): Promise<createVoucher> {
    return await this.vouchersRepository.createVoucher(voucherData);
  }

  async getAllVouchers(): Promise<IVoucher[]> {
    return await this.vouchersRepository.getAllVouchers();
  }

  async getVoucherById(id: string): Promise<IVoucher | null> {
    const voucher = await this.vouchersRepository.getVoucherById(id);
    if (!voucher) {
      throw new Error('Voucher not found');
    }
    return voucher;
  }

  async deleteById(id: string): Promise<IVoucher | null> {
    const voucher = await this.vouchersRepository.deleteById(id);
    if (!voucher) {
      throw new Error('Voucher not found');
    }
    return voucher;
  }

  async updateVoucherById(
    id: string,
    dataVoucher: IVoucher,
  ): Promise<IVoucher | null> {
    const voucher = await this.vouchersRepository.updateVoucherById(
      id,
      dataVoucher,
    );
    if (!voucher) {
      throw new Error('Voucher not found');
    }
    return voucher;
  }
}
