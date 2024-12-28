import { IComments, CreateComments } from '../dto/comments.dto'; // Import các interface
import { CommentsRepository } from '../repository/comments.repository'; // Import CommentsRepository

export class CommentsService {
  private commentsRepository = new CommentsRepository(); // Khởi tạo CommentsRepository

  async getAllComments(): Promise<IComments[]> {
    // Lấy tất cả bình luận
    return this.commentsRepository.getAllComments(); // Gọi đúng phương thức
  }

  async createComment(
    commentData: Partial<CreateComments>,
  ): Promise<CreateComments> {
    // Tạo bình luận mới
    return await this.commentsRepository.createComment(commentData); // Gọi đúng phương thức
  }

  async getCommentById(id: string): Promise<IComments | null> {
    // Lấy bình luận theo ID
    const comment = await this.commentsRepository.getCommentById(id);
    if (!comment) {
      throw new Error('Bình luận không tìm thấy'); // Thông báo lỗi nếu không tìm thấy bình luận
    }
    return comment;
  }

  async deleteCommentById(id: string): Promise<IComments | null> {
    // Xóa bình luận theo ID
    const comment = await this.commentsRepository.deleteCommentById(id);
    if (!comment) {
      throw new Error('Bình luận không tìm thấy'); // Thông báo lỗi nếu không tìm thấy bình luận
    }
    return comment;
  }

  async updateCommentById(
    id: string,
    dataComments: Partial<IComments>,
  ): Promise<IComments | null> {
    // Cập nhật bình luận theo ID
    const comment = await this.commentsRepository.updateCommentById(
      id,
      dataComments,
    );
    if (!comment) {
      throw new Error('Bình luận không tìm thấy'); // Thông báo lỗi nếu không tìm thấy bình luận
    }
    return comment;
  }
}
