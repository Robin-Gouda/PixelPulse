import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();

    // user._doc
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a  user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("User not Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, currentUserAdminStatus, password } = req.body;

  if (id === _id) {
    try {
      // change password if and only if(password && id === currentUserId)
      if (password) {
        const salt = await bcrypt.genSalt(10);
        // console.log(salt);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User Successfully Deleted ");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};

//Follow a user  (understand again 1.10.00)
export const followUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action  forbidden again");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User Followed!");
      } else {
        res.status(403).json("already following the user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// UnFollow a user
export const unFollowUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action  forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (followUser.followers.includes(_id)) {
        await followUser.updateOne({ $pull: { followers: _id } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User UnFollowed!");
      } else {
        res.status(403).json("You are not following the user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
