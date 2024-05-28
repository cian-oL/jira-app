import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header className="bg-indigo-600 text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-amber-300 hover:text-white"
        >
          MyJiraApp
        </Link>
        <Button
          onClick={async () => await loginWithRedirect()}
          className="bg-amber-300 font-bold text-black hover:bg-white"
        >
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
