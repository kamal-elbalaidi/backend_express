import { Router } from "express";
import { get_users } from "./user.controller";
const user_router = Router();

// work place
user_router.get('/get-users', get_users)


export default user_router;
