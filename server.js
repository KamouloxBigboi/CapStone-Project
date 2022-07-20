import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.connect(
    `mongodb+srv://KamouloxBigboi:ZcmeRhkIp6X4W50m@cluster0.pojuehc.mongodb.net/?retryWrites=true&w=majority`, 
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