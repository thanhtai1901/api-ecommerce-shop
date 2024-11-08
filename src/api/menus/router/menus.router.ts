import { Router } from 'express';

import { MenuController } from '../controller/menus.controller';

const menusRouter = Router();
const menusController = new MenuController();
menusRouter.get('/', (req, res) => {
  menusController.getAllMenus(req, res);
  menusRouter.post('/', (req, res) => {
    menusController.createMenus(req, res);
  });
});
export default menusRouter;
