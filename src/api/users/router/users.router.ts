import { Router } from 'express';
import { UsersController } from '../controller/users.controller';

const usersRouter = Router();
const usersController = new UsersController();
usersRouter.get('/', (req, res) => {
  usersController.getAllUsers(req, res);
});
export default usersRouter;
