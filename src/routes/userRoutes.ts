import { Router } from 'express';
import { getAllUsers, userSignup } from '../controllers/userControllers.js';
import { signupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
// userRoutes.post("/signup", (req, res) => {
//   console.log("Direct inline middleware test");
//   if (!req.body || !req.body.password) {
//     return res.status(400).json({ message: "Password is required" });
//   }
//   res.status(200).json({ message: "Middleware passed" });
// });

export default userRoutes;