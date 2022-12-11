import express from "express";
import mongoose from "mongoose";
import routesPosts from './routes/post.js'
import routesPost from './routes/post.js'
import routesPostone from "./routes/post.js"
import routesComment from "./routes/comment.js"
import routesUser from "./routes/user.js"
import cors from "cors";

const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", routesUser)
app.use("/posts", routesPosts)
app.use("/posts/:id", routesPost)
app.use("/comments", routesComment)

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.connect(
    `mongodb+srv://KamouloxBigboi:ZcmeRhkIp6X4W50m@cluster0.pojuehc.mongodb.net/sante_connect?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully to Mongo");
  });
});