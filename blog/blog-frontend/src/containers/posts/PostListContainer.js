import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { listPosts } from '../../modules/posts';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {posts, error, loading, user } = useSelector(
        ({ posts, loading, user }) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
            user: user.user,
        }),
    );

    useEffect(() => {
        const {tag, username, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({tag, username, page}));
    }, [dispatch, location.search]);
    return (
        <PostList loading={loading} error={error}
        posts={posts} showWriteButton={user}
        />
    );
};

export default PostListContainer;