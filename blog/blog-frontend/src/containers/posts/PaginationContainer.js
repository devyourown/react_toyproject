import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';
import qs from 'qs';

const PaginationContainer = () => {
    const location = useLocation();
    const { lastPage, posts, loading } = useSelector( ({posts, loading}) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    if(!posts || loading) return null;

    const { tag, username, page = 1} = qs.parse(location.search, {
        ignoreQueryPrefix: true, 
    });
    return (
        <Pagination
            tag={tag}
            username={username}
            page={parseInt(page, 10)}
            lastPage={lastPage}
        />
    );
};

export default PaginationContainer;