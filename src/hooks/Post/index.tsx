import React, { createContext, useCallback, useContext, useState } from 'react';
import { Post } from '../../@types/Post';
import { Response } from '../../@types/Response';
import { api } from '../../services/api';
import { PostContextData } from './models/PostContextData';

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async (): Promise<void> => {
    const { data }: { data: Response<Post[]> } = await api.get('post/read');

    setPosts(data.content as Post[]);
  }, []);

  const addPost = useCallback(async (newPost: Post): Promise<Response<Post>> => {
    const { data }: { data: Response<Post> } = await api.post('post/create', newPost);

    setPosts(prev => {
      const newPosts = [data.content as Post, ...prev];

      return newPosts;
    });

    return data;
  }, []);

  const fetchPostsByUser = useCallback(async (userId: string): Promise<Response<Post[]>> => {
    const { data }: { data: Response<Post[]> } = await api.get(`post/read/${userId}`);

    return data;
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        fetchPosts,
        fetchPostsByUser,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = (): PostContextData => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('This feature must be used within a provider');
  }

  return context;
};
