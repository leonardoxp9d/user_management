import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetUserProfileUseCase } from "./GetUserProfileUseCase";

class GetUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.query;

    const getUserProfileUseCase = container.resolve(GetUserProfileUseCase);

    const userProfile = await getUserProfileUseCase.execute(email as string);

    return response.status(201).json(userProfile);
  }
}

export { GetUserProfileController };
