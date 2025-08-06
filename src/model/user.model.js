import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { formatDate } from "../utils/formatDate.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: {
        firstname: {
          type: String,
          required: true,
        },
        lastname: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: {
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
      default: function () {
        const initials =
          `${this.name.firstname[0]}${this.name.lastname[0]}`.toUpperCase();
        return `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff`;
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

export const User = mongoose.model('User', userSchema, "Students");


