import { User } from '../../../@types/User';
import { AuthCredentials } from './AuthCredentials';
import { SignUpData } from './SignUpData';
import { Response } from '../../../@types/Response';

interface AuthContextData {
  user: User;
  signIn: (credentials: AuthCredentials) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<Response<User>>;
  signOut: () => void;
}

export type { AuthContextData };
