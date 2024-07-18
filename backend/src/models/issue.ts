import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
  issueCategory: { type: String, required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  acceptanceCriteria: [{ type: String, required: true }],
  storyPoints: { type: Number },
  assignee: { type: String },
  createdAt: { type: Date, required: true },
  lastUpdated: { type: Date, required: true },
});

const Issue = mongoose.model("Issue", IssueSchema);

export default Issue;
