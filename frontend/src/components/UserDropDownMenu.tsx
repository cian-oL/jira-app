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

const UserDropDownMenu = () => {
  const { logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-amber-300 rounded p-1 text-black hover:bg-white">
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-indigo-500 text-white mr-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
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
