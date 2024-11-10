import { Router } from 'express';
import { MenuController } from '../controller/menus.controller';

const menusRouter = Router();
const menusController = new MenuController();

menusRouter.get('/', (req, res) => {
  menusController.getAllMenus(req, res);
});

menusRouter.post('/', (req, res) => {
  menusController.createMenus(req, res);
});

menusRouter.get('/:id', (req, res) => {
  menusController.getMenusById(req, res);
});
menusRouter.delete('/:id', (req, res) => {
  menusController.getMenusById(req, res);
});
menusRouter.patch('/:id', (req, res) => {
  menusController.updataMenusById(req, res);
});

export default menusRouter;
