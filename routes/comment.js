import Comment from "../models/comment.js";
import express from 'express';

const router = express.Router();

// Création des routes POST / GET 

// Get comments

router.get("/", async (req, res) => {
  const comment = await Comment.find({});

  try {
    res.send(comment);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Post comment

router.post("/", async (req, res) => {    
    const comment = new commentModel(req.body);
  
    try {
      await comment.save();
      res.send(comment);
    } catch (error) {
      res.status(500).send(err);
    }
});

router.delete("/", async (req, res) => {
    const comment =  await commentModel.delete(request.body);

    try {
      await comment.delete();
      res.send(comment);
    } catch (error) {
      res.status(500).send(err);
    }
});


export default router