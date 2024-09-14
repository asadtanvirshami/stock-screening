// hooks/useUser.ts
import { useAtom } from "jotai";
import { userAtom } from "./index";

interface User {
  id: string | null;
  fname: string;
  lname: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
}

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  const saveUser = (newUser: User) => {
    setUser(newUser);
  };

  const updateUser = (updatedFields: Partial<User>) => {
    setUser((prevUser: any) =>
      prevUser ? { ...prevUser, ...updatedFields } : null
    );
  };

  const deleteUser = () => {
    setUser(null);
  };

  return {
    user,
    saveUser,
    updateUser,
    deleteUser,
  };
};
