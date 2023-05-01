import User from "../models/User";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  await User.create({
    email,
    password,
  });
  return res.send("Sign up");
};
export const userView = async (req, res) => {
  const users = await User.find().exec();
  return res.send(users);
};
