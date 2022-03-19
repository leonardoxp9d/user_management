/** controller - tem toda a responsabilidade que estava dentro da nossa
 * rota
 * controllers - são classes que recebem a requisição e retornam
 * a resposta para quem está chamando elas, ele gerencia as rotas */

import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    await deleteUserUseCase.execute(email);

    return response.status(200).json({ message: "User deleted successfully!" });
  }
}

export { DeleteUserController };
