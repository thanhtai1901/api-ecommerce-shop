import { Request, Response } from 'express';
import { CategoriesService } from '../service/catetogries.service';

const categoriesService = new CategoriesService();

export class CategoriesController {
  async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await categoriesService.getAllCategories();
      res.status(200).json({
        data: categories,
        length: categories.length,
        message: 'Lấy tất cả danh mục thành công',
      });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async createCategories(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const categories = await categoriesService.creatCategotries(body);
      res.status(201).json({
        data: categories,
        message: 'Tạo danh mục thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async getCategoriesById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const categories = await categoriesService.getCategoriesById(id);
      res.status(200).json({
        data: categories,
        message: 'Lấy danh mục theo ID thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async deleteCategoriesById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const categories = await categoriesService.deleteCategoriesById(id);
      res.status(200).json({
        data: categories,
        message: 'Xóa danh mục thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async updateCategoriesById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const dataCategories = req.body;
      const categories = await categoriesService.updateCategoriesById(
        id,
        dataCategories,
      );
      res.status(200).json({
        data: categories,
        message: 'Cập nhật danh mục thành công',
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }
}
