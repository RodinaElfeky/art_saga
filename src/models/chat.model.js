import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";
const chatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    to: { type: mongoose.Types.ObjectId, ref: "User" },
    from: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model("Chat", chatSchema);
export default ChatModel;
