import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";
const communitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
    shareType: {
      type: String,
      enum: ["post", "event"],
      default: "post",
    },
    eventDate: {
      type: Date,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    unlikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const CommunityModel = mongoose.model("Community", chatSchema);
export default CommunityModel;
