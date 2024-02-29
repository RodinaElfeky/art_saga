import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const paintingSchema = new mongoose.Schema(
  {
    artistId: { type: mongoose.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PaintingModel = mongoose.model("User", paintingSchema);
export default PaintingModel;
