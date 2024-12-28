import { Request, Response } from 'express';
import { LikesService } from '../service/like.service'; // Giả sử bạn đã định nghĩa LikesService
const likesService = new LikesService();

export class LikesController {
  async getAllLikes(req: Request, res: Response): Promise<void> {
    try {
      const likes = await likesService.getAllLikes();
      res.status(200).json({
        data: likes,
        length: likes.length,
        message: 'Get all likes successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async createLike(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const like = await likesService.createLike(body);
      res.status(201).json({
        data: like,
        message: 'Create like successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async getLikeById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const like = await likesService.getLikeById(id);
      res.status(200).json({
        data: like,
        message: 'Get like by ID successfully',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteLikeById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const like = await likesService.deleteLikeById(id);
      res.status(200).json({
        data: like,
        message: 'Delete like successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async updateLikeById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const dataLike = req.body;
      const like = await likesService.updateLikeById(id, dataLike);
      res.status(200).json({
        data: like,
        message: 'Update like successfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }
}
