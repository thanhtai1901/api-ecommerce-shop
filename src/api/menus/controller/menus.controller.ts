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
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }
  async getMenusById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const menus = await menuService.getMenusById(id);
      res.status(200).json({
        data: menus,
        message: 'get usersById successfully',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async deleteMenusById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const menus = await menuService.getMenusById(id);
      res.status(200).json({
        data: menus,
        message: 'delete menus uccessfully ',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }
  }
  async updataMenusById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const dataMenus = req.body;
      const menus = await menuService.updataMenusById(id, dataMenus);
      res.status(200).json({
        data: menus,
        message: 'update menus uccessfully',
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.massage || 'Internal server error' });
    }
  }
}
