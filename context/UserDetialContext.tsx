import { createContext } from "react";

interface UserDetailContextType {
  userDetails: any;
  setUserDetails: React.Dispatch<React.SetStateAction<any>>;
}

// Provide default values for context
export const UserDetialContext = createContext<UserDetailContextType>({
  userDetails: null,
  setUserDetails: () => {},
});