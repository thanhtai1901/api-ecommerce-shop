import { IMenu, createMenu } from '../dto/menus.dto';
import { Menus } from '../schema/menu.schema';

export class MenusRpository {
  async getAllMenus(): Promise<IMenu[]> {
    return await Menus.find();
  }
  async createMenu(menuData: Partial<createMenu>): Promise<createMenu> {
    const Menu = new Menus(menuData);
    return await Menu.save();
  }
  async getMenuById(id: string): Promise<IMenu | null> {
    return await Menus.findById(id);
  }
}
