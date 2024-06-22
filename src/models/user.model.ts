import { Schema, model } from "mongoose";
import { User } from "../types/User";

const userSchema = new Schema<User>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, enum: ['ADMIN', 'STUDENT', 'TEACHER'], required: true },
  active: { type: Boolean, default: true }
});

export const UserModel = model("user", userSchema);