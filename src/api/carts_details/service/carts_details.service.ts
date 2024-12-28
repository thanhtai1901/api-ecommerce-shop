import { ICartsDetails, CreateOrderDetailsDto } from '../dto/carts_details.dto';
import { CartDetailsRepository } from '../repository/carts_details.repository';

export class CartDetailsService {
  private cartDetailsRepository = new CartDetailsRepository();

  async getAllCartDetails(): Promise<ICartsDetails[]> {
    return this.cartDetailsRepository.getAllCartDetails();
  }

  async createCartDetails(
    cartData: Partial<CreateOrderDetailsDto>,
  ): Promise<CreateOrderDetailsDto> {
    return await this.cartDetailsRepository.createCartDetails(cartData);
  }

  async getCartDetailsById(id: string): Promise<ICartsDetails | null> {
    const cartDetails = await this.cartDetailsRepository.getCartDetailsById(id);
    if (!cartDetails) {
      throw new Error('Cart details not found');
    }
    return cartDetails;
  }

  async deleteCartDetailsById(id: string): Promise<ICartsDetails | null> {
    const cartDetails =
      await this.cartDetailsRepository.deleteCartDetailsById(id);
    if (!cartDetails) {
      throw new Error('Cart details not found');
    }
    return cartDetails;
  }

  async updateCartDetailsById(
    id: string,
    dataCartDetails: Partial<ICartsDetails>,
  ): Promise<ICartsDetails | null> {
    const cartDetails = await this.cartDetailsRepository.updateCartDetailsById(
      id,
      dataCartDetails,
    );
    if (!cartDetails) {
      throw new Error('Cart details not found');
    }
    return cartDetails;
  }
}
