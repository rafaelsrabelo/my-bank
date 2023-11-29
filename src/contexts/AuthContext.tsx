import { createContext, ReactNode, useEffect, useState } from "react";
import { storageUserSave, storageUserGet, storageUserRemove } from "../storage/storageUser";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";
import { removeToken, storageAuthToken, storageAuthTokenGet } from "../storage/storageAuthToken";
import { jwtDecode } from "jwt-decode";


export type AuthContextDataProps = {
  user: UserDTO;
  login: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContexProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

  async function login(email: string, password: string) { 
    try {
      const { data } = await api.post('/auth/signin', { email, password });
      if (data.token) {
        const token = data.token;
        const decodedUser = jwtDecode<UserDTO>(data.token);
        console.log('---------------------');
        console.log(decodedUser);
        setUser(decodedUser);
        storageUserSave(decodedUser);
        storageAuthToken(data.token);
        api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
      }
    } catch (error) {
      throw error;    
    }
  }
  
  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
      await removeToken();
    } catch (error) {
      throw(error)
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();
      if(token && userLogged) {
        setUser(userLogged);
        setIsLoadingUserStorageData(false);
      }
    } catch (error) {
      throw(error)      
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ isLoadingUserStorageData, user, login, signOut }}>
        {children}
      </AuthContext.Provider>
  )
}