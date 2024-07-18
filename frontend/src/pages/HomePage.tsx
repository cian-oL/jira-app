import { useAuth0 } from "@auth0/auth0-react";

import SignInTile from "@/components/SignInTile";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return <>{isAuthenticated ? <div>Home Page</div> : <SignInTile />}</>;
};

export default HomePage;
