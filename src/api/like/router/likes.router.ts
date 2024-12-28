import { Router } from 'express';
import { LikesController } from '../controller/likes.controller'; // Giả sử bạn đã định nghĩa LikesController

const likesRouter = Router();
const likesController = new LikesController();

likesRouter.get('/', (req, res) => {
  likesController.getAllLikes(req, res);
});

likesRouter.post('/', (req, res) => {
  likesController.createLike(req, res);
});

likesRouter.get('/:id', (req, res) => {
  likesController.getLikeById(req, res);
});

likesRouter.delete('/:id', (req, res) => {
  likesController.deleteLikeById(req, res);
});

likesRouter.patch('/:id', (req, res) => {
  likesController.updateLikeById(req, res);
});

export default likesRouter;
