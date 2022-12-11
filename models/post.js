import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  imgURL: {
    type: String
  },

  date: {
    type: String
  }
});

const Post = mongoose.model("Post", PostSchema);


export default Post