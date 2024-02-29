import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";
const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const CommentsModel = mongoose.model("Comment", commentSchema);
export default CommentsModel;
