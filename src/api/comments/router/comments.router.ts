import { Router } from 'express';
import { CommentsController } from '../controller/comments.controller';

const commentsRouter = Router(); // Đổi tên router thành commentsRouter
const commentsController = new CommentsController(); // Khởi tạo CommentsController

commentsRouter.get('/', (req, res) => {
  commentsController.getAllComments(req, res); // Gọi phương thức lấy tất cả bình luận
});

commentsRouter.post('/', (req, res) => {
  commentsController.createComment(req, res); // Gọi phương thức tạo bình luận
});

commentsRouter.get('/:id', (req, res) => {
  commentsController.getCommentById(req, res); // Gọi phương thức lấy bình luận theo ID
});

commentsRouter.delete('/:id', (req, res) => {
  commentsController.deleteCommentById(req, res); // Gọi phương thức xóa bình luận theo ID
});

commentsRouter.patch('/:id', (req, res) => {
  commentsController.updateCommentById(req, res); // Gọi phương thức cập nhật bình luận theo ID
});

export default commentsRouter; // Xuất router
