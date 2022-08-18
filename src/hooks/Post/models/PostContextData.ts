import { Post } from '../../../@types/Post';
import { Response } from '../../../@types/Response';

interface PostContextData {
  posts: Post[];
  addPost: (newPost: Post) => Promise<Response<Post>>;
  fetchPosts: () => Promise<void>;
  fetchPostsByUser: (userId: string) => Promise<Response<Post[]>>;
}

export type { PostContextData };
