import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import { useCreateUser } from "@/api/userApiClient";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = useCreateUser();
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && user?.name && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email, name: user.name });
      hasCreatedUser.current = true;
    }

    navigate("/");
  }, [user, navigate, createUser]);

  return <>Loading...</>;
};
export default AuthCallbackPage;
