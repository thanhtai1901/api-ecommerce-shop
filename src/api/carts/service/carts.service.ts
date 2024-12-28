import { ICarts, CreateCarts } from '../dto/carts.dto'; // Đảm bảo rằng đường dẫn import là chính xác
import { CartsRepository } from '../repository/carts.repository';

export class CartsService {
  private cartsRepository = new CartsRepository();

  // Lấy tất cả giỏ hàng
  async getAllCarts(): Promise<ICarts[]> {
    return this.cartsRepository.getAllCarts();
  }

  // Tạo giỏ hàng mới
  async createCart(cartData: Partial<CreateCarts>): Promise<ICarts> {
    return await this.cartsRepository.createCart(cartData);
  }

  // Lấy giỏ hàng theo ID
  async getCartById(id: string): Promise<ICarts | null> {
    const cart = await this.cartsRepository.getCartById(id);
    if (!cart) {
      throw new Error('Giỏ hàng không tìm thấy'); // Thông báo lỗi nếu không tìm thấy giỏ hàng
    }
    return cart;
  }

  // Xóa giỏ hàng theo ID
  async deleteCartById(id: string): Promise<ICarts | null> {
    const cart = await this.cartsRepository.deleteCartById(id);
    if (!cart) {
      throw new Error('Giỏ hàng không tìm thấy'); // Thông báo lỗi nếu không tìm thấy giỏ hàng
    }
    return cart;
  }

  // Cập nhật giỏ hàng theo ID
  async updateCartById(
    id: string,
    cartData: Partial<ICarts>,
  ): Promise<ICarts | null> {
    const cart = await this.cartsRepository.updateCartById(id, cartData);
    if (!cart) {
      throw new Error('Giỏ hàng không tìm thấy'); // Thông báo lỗi nếu không tìm thấy giỏ hàng
    }
    return cart;
  }
}
