import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';
import { useAuth } from '../../../hooks/Auth';
import { usePost } from '../../../hooks/Post';
import PostCard from '../../../components/PostCard';
import { Post } from '../../../@types/Post';
import { showAlert } from '../../../utils/showAlert';
import Loading from '../../../components/Loading';

const User = (): JSX.Element => {
  const classes = useStyles();
  const { user } = useAuth();
  const { fetchPostsByUser } = usePost();
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchPostsByUser(user.id as string);

        setMyPosts(res.content as Post[]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        showAlert({
          title: 'Ops...',
          text: err.response.data.message,
          icon: 'error',
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchPostsByUser, user]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.userInfos}>
          <Typography variant='h5' color='textPrimary'>
            {user.name}
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            {user.email}
          </Typography>
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant='h3' color='primary'>
          Meus Posts
        </Typography>
        {loading ? (
          <div className={classes.loadingContainer}>
            <Loading loadingSize={50} />
          </div>
        ) : (
          myPosts.map(post => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default User;
