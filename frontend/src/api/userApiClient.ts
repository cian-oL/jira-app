import { useMutation } from "react-query";

type CreateUserData = {
  auth0Id: string;
  email: string;
  name?: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateUser = () => {
  const createUserRequest = async (createUserData: CreateUserData) => {
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUserData),
    });

    if (!response.ok) {
      throw new Error("Error creating user");
    }
    return response.json();
  };

  const { mutateAsync: createUser } = useMutation(createUserRequest);

  return { createUser };
};
