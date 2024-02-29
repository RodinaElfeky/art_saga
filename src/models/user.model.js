import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirm_email: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    profilepic: {
      type: String,
      default:
        "https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png",
    },
    userType: {
      type: String,
      enums: ["client", "artist", "admin"],
    },
    departments: {
      type: String,
      enums: ["digital art", "manga", "anime", "3D"],
    },
    cv: {
      type: String,
    },
    bio: {
      type: String,
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.validatePassword = async function (reqPassword) {
  return await bcrypt.compare(reqPassword, this.password);
};

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
