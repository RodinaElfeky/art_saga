import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const orderSchema = new mongoose.Schema(
  {
    artistId: { type: mongoose.Types.ObjectId, ref: "User" },
    clientId: { type: mongoose.Types.ObjectId, ref: "User" },
    price: { type: Number, required: true },
    orderstatus: {
      type: String,
      required: true,
      enum: ["Pending", "Accepted", "Rejected"],
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;
