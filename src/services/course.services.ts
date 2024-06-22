import { Course } from "../types/Course";
import { CourseModel } from "../models/course.model";

export const create = async (course: Course): Promise<Course | null> => {
  try {
    return await CourseModel.create(course);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async (): Promise<Course[] | []> => {
  try {
    return await CourseModel.find({});
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getById = async (id: string): Promise<Course | null> => {
  try {
    return await CourseModel.findById(id);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const update = async (id: string, body: Course): Promise<Course | null> => {
  try {
    return await CourseModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const remove = async (id: string): Promise<Course | null> => {
  try {
    return await CourseModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
