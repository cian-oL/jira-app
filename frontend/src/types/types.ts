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
