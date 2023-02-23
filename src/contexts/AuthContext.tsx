import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  login: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContexProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function login(email: string, password: string) { 
    try {
      const { data } = await api.post('/login', { email, password });
      console.log(`aqui esta o data ${data}`);
  
      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      throw error;    
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
  )
}