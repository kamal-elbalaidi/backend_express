import express from "express";
import dotenv from "dotenv";
import i18next from "./core/config/i18next.config";
import i18nextMiddleware from "i18next-http-middleware";
import routes from "./modules/routes";
import { exception_not_found } from "./core/common/exceptions/exception.not_found";
import { error_handler } from "./middlewares/error.handler";
const app = express();
dotenv.config()

// i18next
app.use(i18nextMiddleware.handle(i18next));

// routes
app.use("/api", routes);

// not found page 
app.use(exception_not_found)

// error handler
app.use(error_handler);

export default app;
