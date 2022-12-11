import Post from "../models/post.js";
import express from 'express';

const router = express.Router();
// Création des routes POST / GET 



// show all
router.get("/", async (req, res) => {
  const posts = await Post.find({});

  try {
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// show one

router.get("/:id", async (req, res) => {
  
  const post = await Post.findOne({ id: req.params.id });

  try {
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (request, response) => {    
    const post = new Post(request.body);
  
    try {
      await post.save();
      response.send(post);
    } catch (error) {
      response.status(500).send(error);
    }
});


export default router