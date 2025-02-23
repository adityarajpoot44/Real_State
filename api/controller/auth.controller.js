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
  const {email, password } = req.body;
  try {
    const validuser = await User.findOne({email});
    if(!validuser) return next({message:"user not found"});
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if(!validPassword) return next({message:"wrong password"});
    //JWT token 
        const token =jwt.sign({id:validuser._id},'0LB5tcezUwZbOs1YnDC03zjDJPmODoFz',{ expiresIn: "1h" });
        const { password: p, ...rest} = validuser._doc;

    res.cookie('access_token', token, { httpOnly: false })
    .status(200)
    .json({success:true,token,validuser:rest});
    
  } catch (error) {
    next(error);
  }
}