import React from "react";
import { User } from "../types";

interface AuthContextProps {
  user: User;
}
export const AuthContext = React.createContext({} as AuthContextProps);
export const AuthProvider = AuthContext.Provider;