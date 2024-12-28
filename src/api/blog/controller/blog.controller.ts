import { Request, Response } from 'express';
import { BlogService } from '../service/blog.service'; // Sửa tên import từ CategoriesService thành BlogService
const blogService = new BlogService(); // Sửa tên biến từ categoriesService thành blogService

export class BlogController {
  async getAllBlogs(req: Request, res: Response): Promise<void> {
    // Đổi tên phương thức
    try {
      const blogs = await blogService.getAllBlogs(); // Sửa tên phương thức gọi tới service
      res.status(200).json({
        data: blogs,
        length: blogs.length,
        message: 'Lấy tất cả blog thành công', // Đổi thông báo
      });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async createBlog(req: Request, res: Response): Promise<void> {
    // Đổi tên phương thức
    try {
      const body = req.body;
      const blog = await blogService.createBlog(body); // Sửa tên phương thức gọi tới service
      res.status(201).json({
        data: blog,
        message: 'Tạo blog thành công', // Đổi thông báo
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async getBlogById(req: Request, res: Response): Promise<void> {
    // Đổi tên phương thức
    try {
      const id = req.params.id;
      const blog = await blogService.getBlogById(id); // Sửa tên phương thức gọi tới service
      res.status(200).json({
        data: blog,
        message: 'Lấy blog theo ID thành công', // Đổi thông báo
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
  }

  async deleteBlogById(req: Request, res: Response): Promise<void> {
    // Đổi tên phương thức
    try {
      const id = req.params.id;
      const blog = await blogService.deleteBlogById(id); // Sửa tên phương thức gọi tới service
      res.status(200).json({
        data: blog,
        message: 'Xóa blog thành công', // Đổi thông báo
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }

  async updateBlogById(req: Request, res: Response): Promise<void> {
    // Đổi tên phương thức
    try {
      const id = req.params.id;
      const dataBlog = req.body; // Đổi tên biến từ dataCategories thành dataBlog
      const blog = await blogService.updateBlogById(id, dataBlog); // Sửa tên phương thức gọi tới service
      res.status(200).json({
        data: blog,
        message: 'Cập nhật blog thành công', // Đổi thông báo
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Lỗi máy chủ nội bộ' });
    }
  }
}
