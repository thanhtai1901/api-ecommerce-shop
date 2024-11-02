import { IUser } from '../dto/users.dto';
import { Users } from '../schema/user.schema';

export class UsersRepository {
  async getAllUsers(): Promise<IUser[]> {
    return await Users.find();
  }
}
