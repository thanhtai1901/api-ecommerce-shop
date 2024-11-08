import { Request, Response } from 'express';
import { MenuService } from '../service/menus.service';

const menuService = new MenuService();
export class MenuController {
  async getAllMenus(req: Request, res: Response): Promise<void> {
    try {
      const menus = await menuService.getAllMenus();
      res.status(200).json({
        data: menus,
        length: menus.length,
        massage: 'Get all users successfully',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async createMenus(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const menus = await menuService.createMenus(body);
      res.status(201).json({
        data: menus,
        message: 'create users successfully ',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
