import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IUserProfile {
  name: string;
  username: string;
  email: string;
}

@injectable()
class GetUserProfileUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(email: string): Promise<IUserProfile> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists");
    }

    const userProfile = {
      name: user.name,
      email: user.email,
      username: user.username,
    };

    return userProfile;
  }
}

export { GetUserProfileUseCase };
