import { Icategories, creatCategotries } from '../dto/categories.dto';
import { Categories } from '../schema/categories.schema';

export class CategoriesRepository {
  async getAllCategories(): Promise<Icategories[]> {
    return await Categories.find();
  }

  async createCategories(
    categoryData: Partial<creatCategotries>,
  ): Promise<creatCategotries> {
    const category = new Categories(categoryData);
    return await category.save();
  }

  async getCategoriesById(id: string): Promise<Icategories | null> {
    return await Categories.findById(id);
  }

  async deleteCategoriesById(id: string): Promise<Icategories | null> {
    return await Categories.findById(id);
  }

  async updateCategoriesById(
    id: string,
    dataCategories: Icategories,
  ): Promise<Icategories | null> {
    return await Categories.findByIdAndUpdate(id, dataCategories, {
      new: true,
    });
  }
}
