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
  inscripts:[
    {
      _id: false,
      student: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  active: { type: Boolean },
});

export const CourseModel = model("course", CourseSchema);
