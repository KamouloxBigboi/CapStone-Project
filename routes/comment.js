import commentModel from "../models/comment.js";
import express from 'express';

const router = express.Router();

// Création des routes POST / GET 

// Get comments

router.get("/", async (request, response) => {
  const users = await commentModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Post comment

router.post("/", async (request, response) => {    
    const comment = new commentModel(request.body);
  
    try {
      await comment.save();
      response.send(comment);
    } catch (error) {
      response.status(500).send(error);
    }
});


export default router