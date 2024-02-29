import mongoose, { mongo } from "mongoose";
const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    paintingId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const WishlistModel = mongoose.model("wishlist", wishlistSchema);
export default WishlistModel;
