import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },        

});

const User = mongoose.model("User", UserSchema);


export default User