import { Schema } from "mongoose";
import mongoose from "mongoose";
console.log("entering /api/users");
const UserSchema = new Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
const Log = mongoose.model("Log", UserSchema);

export default defineEventHandler(async (event) => {
  try {
    console.log("Entering defineEventHandler");
    const body = await readBody(event);
    const roomCode = body.room;
    const users = await User.findOne({ code: `${roomCode}` });
    let clone = { ...users };
    console.log("clone", clone);
    console.log("try complete");
    return clone._doc.available;
  } catch (error) {
    console.log("ERR:", error);
  }
});
