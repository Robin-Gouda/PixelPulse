import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";

//create new post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("post Created");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get a post
export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//update a post  (Prisma[can handle mongoose and orm] vs  mongoose vs relational orm)
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//delete a post
export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post Deleted");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//like or dislike a post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("post liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("not liked");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Get timeline Post(his post and posts of whom he follows)
export const getTimeLinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await PostModel.find({ userId: userId });

    //
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
