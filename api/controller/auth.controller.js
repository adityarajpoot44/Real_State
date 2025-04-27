import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', flag: true });
  } catch (error) {
    next(error)
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.params;
  console.log(email);
  try {
    const validuser = await User.findOne({ email });
    if (!validuser) return next({ message: "user not found" });
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if (!validPassword) return next({ message: "wrong password" });
    //JWT token 
    const token = jwt.sign({ id: validuser._id }, '0LB5tcezUwZbOs1YnDC03zjDJPmODoFz', { expiresIn: "1h" });
    const { password: p, ...rest } = validuser._doc;

    return res.cookie("access_token", token)
      .status(200)
      .json({ success: true, validuser: rest });

  } catch (error) {
    next(error);
  }
};
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token')
      .status(200).json('User has been logged out!');
  } catch (error) {
    next(error)
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next({ message: "you canonly delete your account" });
  }
  try {
    await User.findByIdAndDelete(req.user.id);

    res.clearCookie('access_token').json('User delete')

  } catch (error) {
    next(error);
  }
};
export const updateUserDetails = async (req, res, next) => {

  // if (req.user.id !== req.params.id) {
  //   return next('you can not update other account password {account id missmatch}');
  // }
  try {
    const updateUser = await User.findByIdAndUpdate(req.user.id, { $set: req.body, }, { new: true });

    const {password,...rest}=updateUser._doc;

    res.status(200).json(rest)

  } catch (error) {
    next(error)
  }

};