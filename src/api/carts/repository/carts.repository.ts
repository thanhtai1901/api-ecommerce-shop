import { ICarts, CreateCarts } from '../dto/carts.dto'; // Đảm bảo rằng đường dẫn import là chính xác
import { Carts } from '../schema/carts.schema'; // Đường dẫn đến schema của giỏ hàng

export class CartsRepository {
  // Lấy tất cả giỏ hàng
  async getAllCarts(): Promise<ICarts[]> {
    return await Carts.find(); // Có thể sử dụng .lean() nếu bạn muốn trả về đối tượng JavaScript thuần túy
  }

  // Tạo giỏ hàng mới
  async createCart(cartData: Partial<CreateCarts>): Promise<ICarts> {
    const cart = new Carts(cartData); // Tạo đối tượng giỏ hàng mới
    return await cart.save(); // Lưu giỏ hàng vào cơ sở dữ liệu
  }

  // Lấy giỏ hàng theo ID
  async getCartById(id: string): Promise<ICarts | null> {
    return await Carts.findById(id); // Lấy giỏ hàng theo ID
  }

  // Xóa giỏ hàng theo ID
  async deleteCartById(id: string): Promise<ICarts | null> {
    return await Carts.findByIdAndDelete(id); // Xóa giỏ hàng theo ID
  }

  // Cập nhật giỏ hàng theo ID
  async updateCartById(
    id: string,
    cartData: Partial<ICarts>,
  ): Promise<ICarts | null> {
    return await Carts.findByIdAndUpdate(id, cartData, { new: true }); // Cập nhật giỏ hàng theo ID
  }
}
