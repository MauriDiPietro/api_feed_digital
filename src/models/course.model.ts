import { Schema, model } from "mongoose";
import { Course } from "../types/Course";

const CourseSchema = new Schema<Course>({
  name: { type: String },
  description: { type: String },
  code: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  image: { type: String },
  daysOfClases: { type: [String] },
  hoursOfClases: { type: [String] },
  active: { type: Boolean },
});

export const CourseModel = model("course", CourseSchema);
