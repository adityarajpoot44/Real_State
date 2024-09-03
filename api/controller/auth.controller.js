import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
  } catch (error) {
    res.send(`error in saving the user detail ${error}`);
  }
};
