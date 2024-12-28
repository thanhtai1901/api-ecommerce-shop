import { IComments, CreateComments } from '../dto/comments.dto'; // Đảm bảo đường dẫn import cho IComments và CreateComments là chính xác
import Comments from '../schema/comments.schema'; // Sửa tên import từ Com thành Comments

export class CommentsRepository {
  async getAllComments(): Promise<IComments[]> {
    return await Comments.find().populate('menu_id').populate('user_id'); // Gọi đúng schema
  }

  async createComment(
    commentData: Partial<CreateComments>,
  ): Promise<CreateComments> {
    const comment = new Comments(commentData); // Tạo đối tượng comment
    return await comment.save(); // Lưu bình luận và trả về
  }

  async getCommentById(id: string): Promise<IComments | null> {
    return await Comments.findById(id); // Gọi đúng schema
  }

  async deleteCommentById(id: string): Promise<IComments | null> {
    return await Comments.findByIdAndDelete(id); // Gọi đúng schema và sử dụng phương thức xóa
  }

  async updateCommentById(
    id: string,
    dataComments: Partial<IComments>,
  ): Promise<IComments | null> {
    return await Comments.findByIdAndUpdate(id, dataComments, { new: true }); // Sửa tên gọi tới schema và đảm bảo dataComments là Partial<IComments>
  }
}
