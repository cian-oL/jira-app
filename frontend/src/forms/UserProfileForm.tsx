import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { User, UserProfileData } from "@/types/types";
import LoadingButton from "@/components/LoadingButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Please fill in your name"),
});

type Props = {
  currentUser: User;
  isLoading: boolean;
  onSave: (userProfileData: UserProfileData) => void;
};

const UserProfileForm = ({ currentUser, isLoading, onSave }: Props) => {
  const form = useForm<UserProfileData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: currentUser.email,
      name: currentUser.name || "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-indigo-100 rounded-lg p-10"
      >
        <div>
          <h1 className="text-2xl font-bold">Profile Summary</h1>
          <FormDescription>
            View and change your profile information
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white lg:w-1/2" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white lg:w-1/2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            type="submit"
            className="rounded-lg bg-amber-300 text-black font-bold w-full lg:w-fit hover:bg-amber-400"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
