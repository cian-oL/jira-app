import { Request, Response } from "express";

import Issue from "../models/issue";

// controllers for /api/issue
const createIssue = async (req: Request, res: Response) => {
  try {
    const existingIssue = await Issue.findOne({
      title: req.body.title,
    });

    if (existingIssue) {
      return res
        .status(409)
        .json({ message: "Issue already exists with this name" });
    }

    const newIssue = new Issue(req.body);
    newIssue.createdAt = new Date();
    newIssue.lastUpdated = new Date();

    await newIssue.save();
    res.status(201).json(newIssue.toObject());
  } catch (err) {
    console.error(err);
    res.send(500).json({ message: "Something went wrong" });
  }
};

const getIssue = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    return res.status(200).json(issue.toObject());
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllIssues = async (req: Request, res: Response) => {
  try {
    const issues = await Issue.find({});

    if (!issues) {
      return res.status(404).json({ message: "Issues not found" });
    }

    return res.status(200).json({ issues });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateIssue = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedIssue = req.body;
    const issue = await Issue.findOneAndUpdate(
      {
        _id: id,
      },
      updatedIssue,
      { new: true }
    );

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    await issue.save();
    return res.status(200).json(updatedIssue.toObject());
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteIssue = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedResult = await Issue.findByIdAndDelete(id);

    if (!deletedResult) {
      return res.status(404).json({ message: "Issue not found" });
    }

    return res.status(200).json({ message: "Issue deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  createIssue,
  getIssue,
  getAllIssues,
  updateIssue,
  deleteIssue,
};
