import { Children, createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  login: (email: string, password: string) => Promise<void>;
}

type Props = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContexProvider({ children }: Props) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function login(email: string, password: string) { 
    try {
      const { data } = await api.post('/users', { email, password });
      // console.log(data);
  
      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);      
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
  )
}