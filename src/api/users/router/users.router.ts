import { Router } from 'express';
import { UsersController } from '../controller/users.controller';

const usersRouter = Router();
const usersController = new UsersController();
usersRouter.get('/', (req, res) => {
  usersController.getAllUsers(req, res);
});
usersRouter.post('/', (req, res) => {
  usersController.createUsers(req, res);
});
usersRouter.get('/:id', (req, res) => {
  usersController.getUsersById(req, res);
});
export default usersRouter;
