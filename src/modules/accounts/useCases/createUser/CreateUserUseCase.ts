import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      username
    );

    if (usernameAlreadyExists) {
      throw new AppError("Username already used!");
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Email already used!");
    }

    const passwordValidated = password.trim();
    if (passwordValidated.length < 6) {
      throw new AppError("Password must be at least 6 characters long!");
    }

    const passwordHash = await hash(passwordValidated, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      username,
    });
  }
}

export { CreateUserUseCase };
