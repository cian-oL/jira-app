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

// === KANBAN BOARD TYPES ===

export type Column = {
  columnId: string;
  title: string;
};
