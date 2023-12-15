import mongoose from "mongoose";
import { Nitro } from "nitro:pack";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  try {
    console.log("running✅>>", config.DB);
    await mongoose.connect(
      "mongodb+srv://riswinmo:riswinmo@cluster0.mqk9ctn.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected an 🟢");
  } catch (error) {
    console.log("something went wrong 🔴");
    console.log(error);
  }
};
