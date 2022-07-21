import express from "express";
import mongoose from "mongoose";
import routesUser from "./routes/user.js"
import routesComment from "./routes/comment.js"
const PORT = 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", routesUser)
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