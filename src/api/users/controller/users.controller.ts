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
  async createUsers(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const users = await usersService.createUsers(body);
      res.status(201).json({
        data: users,
        message: 'create users successfully ',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }

  async getUsersById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const user = await usersService.getUserById(id);
      res.status(200).json({
        data: user,
        message: 'get usersById successfully',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
