import { ILikes, CreateLikes } from '../dto/likes.dto'; // Giả sử bạn đã định nghĩa DTO cho Like
import { LikesRepository } from '../repositories/likes.repositories'; // Giả sử bạn đã định nghĩa LikesRepository

export class LikesService {
  private likesRepository = new LikesRepository();

  async getAllLikes(): Promise<ILikes[]> {
    return this.likesRepository.getAllLikes();
  }

  async createLike(likeData: Partial<CreateLikes>): Promise<CreateLikes> {
    return await this.likesRepository.createLike(likeData);
  }

  async getLikeById(id: string): Promise<ILikes | null> {
    const like = await this.likesRepository.getLikeById(id);
    if (!like) {
      throw new Error('Like not found'); // Thông báo lỗi nếu không tìm thấy lượt thích
    }
    return like; // Return type should be ILike
  }

  async deleteLikeById(id: string): Promise<ILikes | null> {
    const like = await this.likesRepository.deleteLikeById(id);
    if (!like) {
      throw new Error('Like not found'); // Thông báo lỗi nếu không tìm thấy lượt thích
    }
    return like; // Return type should be ILike
  }

  async updateLikeById(
    id: string,
    dataLike: Partial<ILikes>,
  ): Promise<ILikes | null> {
    const like = await this.likesRepository.updateLikeById(id, dataLike);
    if (!like) {
      throw new Error('Like not found'); // Thông báo lỗi nếu không tìm thấy lượt thích
    }
    return like; // Return type should be ILike
  }
}
