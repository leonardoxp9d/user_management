import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      username,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async delete(email: string): Promise<void> {
    await this.repository.delete({ email });
  }
}

export { UsersRepository };
