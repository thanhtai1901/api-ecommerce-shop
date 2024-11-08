import { IMenu, createMenu } from '../dto/menus.dto';
import { MenusRpository } from '../repository/menus.repository';

export class MenuService {
  private menuReponsitory = new MenusRpository();

  async getAllMenus(): Promise<IMenu[]> {
    return this.menuReponsitory.getAllMenus();
  }
  async createMenus(usersData: Partial<createMenu>): Promise<createMenu> {
    return await this.menuReponsitory.createMenu(usersData);
  }
}
