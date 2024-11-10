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
  async getMenuById(id: string): Promise<IMenu | null> {
    const menu = await this.menuReponsitory.getMenuById(id); // Fixed the method call here
    if (!menu) {
      throw new Error('Menu not found'); // Updated the error message
    }
    return menu;
  }
}
