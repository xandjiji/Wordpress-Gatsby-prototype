import React from 'react';

import MasterLayout from '../layouts/MasterLayout';

import PostList from '../components/PostList'
import PageList from '../components/PageList'

const IndexPage = () => {
    return (
        <MasterLayout>
            <PostList />
            <PageList />
        </MasterLayout>
    )
}

export default IndexPage