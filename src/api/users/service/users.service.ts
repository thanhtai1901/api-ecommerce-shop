import { IUser } from '../dto/users.dto';
import { UsersRepository } from '../repository/users.repository';

export class UsersService {
  private usersRepository = new UsersRepository();

  async getAllUsers(): Promise<IUser[]> {
    return this.usersRepository.getAllUsers();
  }
}
