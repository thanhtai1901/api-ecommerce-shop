import { IUser, createUser } from '../dto/users.dto';
import { UsersRepository } from '../repository/users.repository';
import { Users } from '../schema/user.schema';

export class UsersService {
  private usersRepository = new UsersRepository();

  async createUsers(usersData: Partial<createUser>): Promise<createUser> {
    return await this.usersRepository.createUsers(usersData);
  }
  async getAllUsers(): Promise<IUser[]> {
    return await this.usersRepository.getAllUsers();
  }
  async getUserById(id: string): Promise<IUser | null> {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
