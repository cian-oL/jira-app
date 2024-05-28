import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

import { User, CreateUserData, UserProfileData } from "@/types/types";

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

export const useGetCurrentUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getCurrentUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching user");
    }

    return response.json();
  };

  const {
    data: currentUser,
    error,
    isLoading,
  } = useQuery("fetchCurrentUser", getCurrentUserRequest);

  if (error) {
    console.log(error.toString());
  }

  return { currentUser, isLoading };
};

export const useUpdateCurrentUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateCurrentUserRequest = async (userProfileData: UserProfileData) => {
    const accessToken = getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfileData),
    });

    if (!response.ok) {
      throw new Error("Error updating user");
    }

    return response.json();
  };

  const {
    mutateAsync: updateUser,
    error,
    isLoading,
  } = useMutation(updateCurrentUserRequest);

  if (error) {
    console.log(error.toString());
  }

  return { updateUser, isLoading };
};
