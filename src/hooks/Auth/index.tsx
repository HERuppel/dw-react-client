import React, { createContext, useCallback, useContext, useState } from 'react';
import { User } from '../../@types/User';
import { Response } from '../../@types/Response';
import { api } from '../../services/api';

interface AuthCredentials {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  name: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: AuthCredentials) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<Response<User>>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const storageUser = localStorage.getItem('@krud:user');
    const storageToken = localStorage.getItem('@krud:token');

    if (storageUser && storageToken) {
      api.defaults.headers.common['authorization'] = `Bearer ${storageToken}`;
      return JSON.parse(storageUser);
    }
    return {} as User;
  });

  const signIn = useCallback(async (credentials: AuthCredentials): Promise<void> => {
    const { data }: { data: Response<LoginResponse> } = await api.post('auth/login', credentials);

    localStorage.setItem('@krud:user', JSON.stringify(data.content?.user));
    localStorage.setItem('@krud:token', data.content?.token as string);

    api.defaults.headers.common['authorization'] = `Bearer ${data.content?.token as string}`;

    setUser(data.content?.user as User);
  }, []);

  const signUp = useCallback(async (userData: SignUpData): Promise<Response<User>> => {
    const { data }: { data: Response<User> } = await api.post('user/create', userData);

    return data;
  }, []);

  const signOut = (): void => {
    localStorage.clear();
    setUser({} as User);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('This feature must be used within a provider');
  }

  return context;
};
