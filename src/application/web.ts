import express from "express";
import {publicRouter} from "../router/public-api";
import {errorMiddleware} from "../middleware/error-middleware";

export const web = express();
web.use(express.json());

// publish API
web.use(publicRouter);

// middleware handler
web.use(errorMiddleware);