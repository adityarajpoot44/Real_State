import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const realpass = password;
  const newUser = new User({ username, email, password: hashPassword ,realpass});
  try {
    await newUser.save();
    res.send("user created");
  } catch (error) {
    next(error)
  }
};
