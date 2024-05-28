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

export default { createCurrentUser };
