import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import auth0Badge from "@/assets/auth0_badge.png";
import { Button } from "./ui/button";

const SignInTile = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="space-y-4 bg-indigo-100 rounded-lg p-10 flex flex-col items-center mx-auto justify-evenly w-full sm:max-w-[50%]">
      <img src={auth0Badge} className="w-1/10 mx-10" />
      <section className="w-3/4 lg:w-fit">
        <p className="pb-2">
          Sign In or Register with
          <br />
          <a
            href="https://auth0.com/"
            target="_blank"
            className="underline hover:text-amber-600"
          >
            Auth0 by Okta
          </a>
          :
        </p>
        <Link to="/sign-in">
          <Button
            onClick={async () => await loginWithRedirect()}
            className="rounded-lg bg-amber-300 text-black font-bold w-full hover:bg-amber-400"
          >
            Sign In
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default SignInTile;
