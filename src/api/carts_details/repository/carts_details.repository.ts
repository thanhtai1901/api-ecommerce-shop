import { ICartsDetails, CreateOrderDetailsDto } from '../dto/carts_details.dto';
import { CartDetails } from '../schema/carts_details.schema';

export class CartDetailsRepository {
  async getAllCartDetails(): Promise<ICartsDetails[]> {
    return await CartDetails.find().populate('cart_id').populate('menu_id');
  }

  async createCartDetails(
    cartData: Partial<CreateOrderDetailsDto>,
  ): Promise<CreateOrderDetailsDto> {
    const cartDetails = new CartDetails(cartData);
    return await cartDetails.save();
  }

  async getCartDetailsById(id: string): Promise<ICartsDetails | null> {
    return await CartDetails.findById(id)
      .populate('cart_id')
      .populate('menu_id');
  }

  async deleteCartDetailsById(id: string): Promise<ICartsDetails | null> {
    return await CartDetails.findByIdAndDelete(id);
  }

  async updateCartDetailsById(
    id: string,
    dataCartDetails: Partial<ICartsDetails>,
  ): Promise<ICartsDetails | null> {
    return await CartDetails.findByIdAndUpdate(id, dataCartDetails, {
      new: true,
    });
  }
}
