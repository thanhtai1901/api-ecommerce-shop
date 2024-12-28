import { Request, Response } from 'express';
import { CommentsService } from '../service/comments.service';

const commentsService = new CommentsService(); // Khởi tạo CommentsService

export class CommentsController {
  async getAllComments(req: Request, res: Response): Promise<void> {
    try {
      const comments = await commentsService.getAllComments();
      res.status(200).json({
        data: comments,
        length: comments.length,
        message: 'Lấy tất cả bình luận thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async createComment(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const comment = await commentsService.createComment(body);
      res.status(201).json({
        data: comment,
        message: 'Tạo bình luận thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async getCommentById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const comment = await commentsService.getCommentById(id);
      if (!comment) {
        res.status(404).json({ message: 'Bình luận không tìm thấy' });
        return;
      }
      res.status(200).json({
        data: comment,
        message: 'Lấy bình luận theo ID thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async deleteCommentById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const comment = await commentsService.deleteCommentById(id);
      if (!comment) {
        res.status(404).json({ message: 'Bình luận không tìm thấy' });
        return;
      }
      res.status(200).json({
        data: comment,
        message: 'Xóa bình luận thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async updateCommentById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const dataComments = req.body;
      const comment = await commentsService.updateCommentById(id, dataComments);
      if (!comment) {
        res.status(404).json({ message: 'Bình luận không tìm thấy' });
        return;
      }
      res.status(200).json({
        data: comment,
        message: 'Cập nhật bình luận thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }
}
