import commentModel from "../models/comment.js";
import express from 'express';

const router = express.Router();

// Création des routes POST / GET 

// show all
router.get("/", async (request, response) => {
  const users = await commentModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// show one
router.get("/:id", async (request, response) => {
  
  const comment = await commentModel.findOne({ id: req.params.id });

  try {
    response.send(comment);
  } catch (error) {
    response.status(500).send(error);
  }
});

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