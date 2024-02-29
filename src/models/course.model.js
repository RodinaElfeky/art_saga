import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const courseSchema = new mongoose.Schema(
  {
    artistId: { type: mongoose.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number, required: true },
    rate: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enums: ["digital art", "manga", "anime", "3D"],
      required: true,
    },
    requirements: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("Course", courseSchema);
export default CourseModel;
