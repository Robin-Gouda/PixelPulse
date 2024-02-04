import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

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
    await newUser.save();
    res.status(200).json(newUser);
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

      validity
        ? res.status(200).json(user)
        : res.status(400).json({ Message: "Wrong password" });
    } else {
      res.status(404).json({ Message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
