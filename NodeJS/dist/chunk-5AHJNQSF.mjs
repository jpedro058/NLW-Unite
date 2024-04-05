import {
  BadRequest
} from "./chunk-4YYRQZO4.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, request, reply) => {
  console.error(error);
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({
      message: error.message
    });
  }
  reply.status(500).send({
    message: "Internal server error"
  });
};

export {
  errorHandler
};
