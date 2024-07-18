import { useGetCurrentUser, useUpdateCurrentUser } from "@/api/userApiClient";
import UserProfileForm from "@/forms/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetCurrentUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateCurrentUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load User Profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
