import { User } from "../types/User";
import { UserModel } from "../models/user.model";
import { createHash } from "../utils/bcrypt";

export const register = async (user: User): Promise<User | null> => {
  try {
    return await UserModel.create({
      ...user,
      password: createHash(user?.password)
    });
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async (): Promise<User[] | []> => {
  try {
    return await UserModel.find({});
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getById = async (id: string): Promise<User | null> => {
  try {
    return await UserModel.findById(id);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const update = async (id: string, body: User): Promise<User | null> => {
  try {
    return await UserModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const remove = async (id: string): Promise<User | null> => {
  try {
    return await UserModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
