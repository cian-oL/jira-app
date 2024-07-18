import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

import { Issue, IssueFormData } from "@/types/types";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateIssue = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createIssueRequest = async (
    createIssueData: IssueFormData
  ): Promise<Issue> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/issue`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createIssueData),
    });

    if (!response.ok) {
      throw new Error("Error creating issue");
    }
    return response.json();
  };

  const {
    mutateAsync: createIssue,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(createIssueRequest);

  if (isSuccess) {
    toast.success("Issue created");
  }

  if (error) {
    toast.error("Failed to create issue");
    console.log(error);
    reset();
  }

  return { createIssue, isLoading };
};

export const useGetIssueById = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getIssueRequestById = async (issueId: string): Promise<Issue> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/issue/${issueId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching issue");
    }

    return response.json();
  };

  const { data: issue, error, isLoading } = useMutation(getIssueRequestById);

  if (error) {
    toast.error("Failed to retrieve issue");
    console.log(error);
  }

  return { issue, isLoading };
};

export const useGetAllIssues = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAllIssuesRequest = async (): Promise<Issue[]> => {
    const accessToken = getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/issue`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error retrieving issues");
    }

    return response.json();
  };

  const {
    data: issues,
    error,
    isLoading,
  } = useQuery("fetchAllIssues", getAllIssuesRequest);

  if (error) {
    toast.error("Failed to retrieve issues");
    console.log(error);
  }

  return { issues, isLoading };
};

export const useUpdateIssue = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateIssueRequest = async (updateIssueData: Issue): Promise<Issue> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/issue/${updateIssueData._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateIssueData),
      }
    );

    if (!response.ok) {
      throw new Error("Error updating issue");
    }

    return response.json();
  };

  const {
    mutateAsync: updateIssue,
    isSuccess,
    error,
    isLoading,
    reset,
  } = useMutation(updateIssueRequest);

  if (error) {
    toast("Issue update failed");
    console.log(error.toString());
    reset();
  }

  if (isSuccess) {
    toast("Issue updated");
  }

  return { updateIssue, isLoading };
};

export const useDeleteIssueById = () => {
  const { getAccessTokenSilently } = useAuth0();

  const deleteIssueRequestById = async (issueId: string): Promise<void> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/issue/${issueId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting issue");
    }

    return response.json();
  };

  const {
    mutateAsync: deleteIssue,
    isSuccess,
    error,
    isLoading,
    reset,
  } = useMutation(deleteIssueRequestById);

  if (error) {
    toast("Issue delete failed");
    console.log(error.toString());
    reset();
  }

  if (isSuccess) {
    toast("Issue deleted");
  }

  return { deleteIssue, isLoading };
};
