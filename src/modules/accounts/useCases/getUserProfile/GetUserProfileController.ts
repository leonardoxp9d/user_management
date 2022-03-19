import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetUserProfileUseCase } from "./GetUserProfileUseCase";

class GetUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.query;

    const getUserProfileUseCase = container.resolve(GetUserProfileUseCase);

    const user = await getUserProfileUseCase.execute(email as string);

    const userProfile = {
      name: user.name,
      username: user.username,
      email: user.email,
    };

    return response.status(200).json(userProfile);
  }
}

export { GetUserProfileController };
