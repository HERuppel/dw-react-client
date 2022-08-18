import { User } from '../../../@types/User';

interface LoginResponse {
  user: User;
  token: string;
}

export type { LoginResponse };
