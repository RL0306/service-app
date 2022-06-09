import { createContext, useState } from "react";
import { IUser, IUserContext } from "../interface/IUser";

export const UserContext = createContext<IUserContext|null>(null);

type UserContextProviderProps  = {
    children : React.ReactNode;
  }

export const UserProvider = ({children} : UserContextProviderProps) => {
    const[user, setUser] = useState<IUser|null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      )
}


