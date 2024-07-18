import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String },
});

const User = mongoose.model("User", UserSchema);

export default User;
