import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const { newEmail, name, username } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      email,
      newEmail,
      name,
      username,
    });

    return response.status(200).json({ message: "User updated successfully!" });
  }
}

export { UpdateUserController };
