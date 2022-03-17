import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "@shared/container";

import { AppError } from "@shared/errors/AppError";

// importa a conexão do banco de dados
import "@shared/infra/typeorm";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

/** verifica a instancia do erro */
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    /** Se a instancia for do AppError, executa */
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    /** Se não,erro da propria aplicação q n temos controle */
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
