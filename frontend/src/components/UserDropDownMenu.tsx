import { useAuth0 } from "@auth0/auth0-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useGetCurrentUser } from "@/api/userApiClient";

const UserDropDownMenu = () => {
  const { logout } = useAuth0();
  const { currentUser, isLoading: isGetLoading } = useGetCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 bg-amber-300 rounded p-2 text-black font-bold hover:bg-white">
        <User />
        {currentUser?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-indigo-500 text-white mr-2">
        <DropdownMenuLabel className="font-extrabold text-lg underline">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/profile">Profile Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button
          onClick={() => logout()}
          className=" w-full bg-amber-300 font-bold text-black hover:bg-white"
        >
          Sign Out
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropDownMenu;
