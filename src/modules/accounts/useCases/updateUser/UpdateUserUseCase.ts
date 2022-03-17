import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  newEmail?: string;
  name?: string;
  username?: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, newEmail, name, username }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists!");
    }

    if (name) {
      user.name = name;
    }

    if (username) {
      const usernameAlreadyExists = await this.usersRepository.findByUsername(
        username
      );

      if (usernameAlreadyExists) {
        throw new AppError("Username already used!");
      }

      user.username = username;
    }

    if (newEmail) {
      const newEmailAlreadyExists = await this.usersRepository.findByEmail(
        newEmail
      );

      if (newEmailAlreadyExists) {
        throw new AppError("Email already used!");
      }

      user.email = newEmail;
    }

    await this.usersRepository.create(user);
  }
}

export { UpdateUserUseCase };
