import dotenv from "dotenv";
dotenv.config();

export const AppConfig: any = {
  node_env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3000"),
  jwt_secret: process.env.JWT_SECRET || "super_secret_key",
  jwt_access_expires: process.env.JWT_ACCESS_EXPIRES || "15m",
  jwt_refresh_expires: process.env.JWT_REFRESH_EXPIRES || "7d",
} as const;
