import { IUser, createUser } from '../dto/users.dto';
import { Users } from '../schema/user.schema';

export class UsersRepository {
  async getAllUsers(): Promise<IUser[]> {
    return await Users.find();
  }
  async createUsers(usersData: Partial<createUser>): Promise<createUser> {
    const users = new Users(usersData);
    return await users.save();
  }
  async getUserById(id: string): Promise<IUser | null> {
    return await Users.findById(id);
  }
}
