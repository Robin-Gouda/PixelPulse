import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const Key = process.env.JWT_KEY;
//Registering User (Try for Unique user )
export const registerUser = async (req, res) => {
  // const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(
    // username, password: hashedPass, firstname, lastname,
    req.body
  );
  const { username } = req.body;

  try {
    const oldUser = await UserModel.findOne({ username });

    if (oldUser) {
      return res.status(400).json({ message: "user Already exist" });
    }
    const user = await newUser.save();

    const token = jwt.sign({ username: user.username, id: user._id }, Key, {
      expiresIn: "1h",
    });
    // let responseObject = user;
    res.status(200).send({ user, token });
    // console.log(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Logging in existing user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json({ Message: "Wrong password" });
      } else {
        const token = jwt.sign({ username: user.username, id: user._id }, Key, {
          expiresIn: "1h",
        });
        res.status(200).send({ user, token });
      }
    } else {
      res.status(404).json({ Message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
