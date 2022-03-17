import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "@modules/accounts/useCases/deleteUser/DeleteUserController";
import { GetUserProfileController } from "@modules/accounts/useCases/getUserProfile/GetUserProfileController";
import { ListUsersController } from "@modules/accounts/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUserProfileController = new GetUserProfileController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", getUserProfileController.handle);

usersRoutes.get("/listUsers", listUsersController.handle);

usersRoutes.put("/:email", updateUserController.handle);

usersRoutes.delete("/:email", deleteUserController.handle);

export { usersRoutes };
