import express from "express";
import { getUser } from "../app/Http/Controllers/UserController.js";

const router = express.Router();

router.get('/', getUser);

export default router;