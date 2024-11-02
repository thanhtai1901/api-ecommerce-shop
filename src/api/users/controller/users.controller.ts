import { Request, Response } from 'express';
import { UsersService } from '../service/users.service';

const usersService = new UsersService();
export class UsersController {
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await usersService.getAllUsers();
      res.status(200).json({
        data: users,
        length: users.length,
        massage: 'Get all users successfully',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
