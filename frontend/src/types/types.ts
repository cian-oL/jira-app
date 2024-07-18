// === USER TYPES ===

export type User = {
  _id: string;
  email: string;
  name: string;
};

export type CreateUserData = {
  auth0Id: string;
  email: string;
  name?: string;
};

export type UserProfileData = {
  email: string;
  name: string;
};

// === ISSUE TYPES ===

export type Issue = {
  _id: string;
  issueCategory: string;
  title: string;
  name: string;
  description: string;
  acceptanceCriteria: string[];
  storyPoints: number;
  assignee: string;
  createdAt: Date;
  lastUpdated: Date;
};

export type IssueFormData = {
  issueCategory: string;
  title: string;
  name: string;
  description: string;
  acceptanceCriteria: string[];
  storyPoints: number;
  assignee: string;
  createdAt: Date;
};

// === KANBAN BOARD TYPES ===

export type Column = {
  columnId: string;
  title: string;
};
