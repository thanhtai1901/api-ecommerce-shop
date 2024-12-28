import { ILikes, CreateLikes } from '../dto/likes.dto'; // Giả sử bạn đã định nghĩa DTO cho Like
import { Likes } from '../schema/like.shema'; // Giả sử bạn đã định nghĩa schema cho Like

export class LikesRepository {
  async getAllLikes(): Promise<ILikes[]> {
    return await Likes.find().populate('menu_id').populate('user_id');
  }

  async createLike(likeData: Partial<CreateLikes>): Promise<CreateLikes> {
    const like = new Likes(likeData);
    return await like.save();
  }

  async getLikeById(id: string): Promise<ILikes | null> {
    return await Likes.findById(id);
  }

  async deleteLikeById(id: string): Promise<ILikes | null> {
    return await Likes.findByIdAndDelete(id);
  }

  async updateLikeById(
    id: string,
    dataLike: Partial<ILikes>,
  ): Promise<ILikes | null> {
    return await Likes.findByIdAndUpdate(id, dataLike, { new: true });
  }
}
