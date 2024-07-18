import { Request, Response } from "express";

import User from "../models/user";

// controllers for /api/user
const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).json(existingUser.toObject());
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser.toObject());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user.toObject());
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error retireving user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    await user.save();

    return res.status(200).json(user.toObject());
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error updating user" });
  }
};

export default { createCurrentUser, getCurrentUser, updateCurrentUser };
