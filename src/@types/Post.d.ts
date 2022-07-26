import { User } from './User';

export interface Post {
  id?: string;
  title: string;
  body: string;
  imageUrl?: string;
  createdAt: string;
  userId?: string;
  user: User;
}
