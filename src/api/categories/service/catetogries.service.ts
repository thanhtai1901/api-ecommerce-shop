import { Icategories, creatCategotries } from '../dto/categories.dto';
import { CategoriesRepository } from '../repository/categories.repository';

export class CategoriesService {
  private c = new CategoriesRepository();

  async getAllCategories(): Promise<Icategories[]> {
    return this.c.getAllCategories();
  }

  async creatCategotries(
    usersData: Partial<creatCategotries>,
  ): Promise<creatCategotries> {
    return await this.c.createCategories(usersData);
  }

  async getCategoriesById(id: string): Promise<Icategories | null> {
    const categories = await this.c.getCategoriesById(id);
    if (!categories) {
      throw new Error('Categories not found');
    }
    return categories;
  }

  async deleteCategoriesById(id: string): Promise<Icategories | null> {
    const categories = await this.c.deleteCategoriesById(id);
    if (!categories) {
      throw new Error('Categories not found');
    }
    return categories;
  }

  async updateCategoriesById(
    id: string,
    dataCategories: Icategories,
  ): Promise<Icategories | null> {
    const categories = await this.c.updateCategoriesById(id, dataCategories);
    if (!categories) {
      throw new Error('Categories not found');
    }
    return categories;
  }
}
