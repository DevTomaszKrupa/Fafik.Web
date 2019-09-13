import React, { Fragment, useEffect } from 'react';

import { useDocumentTitle } from '../../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/reducers';
import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import components from './styles';


const AdminBlogComponent = () => {
    useDocumentTitle('Blog');
    const dispatch = useDispatch();
    const adminBlogState = useSelector((state: AppState) => state.adminBlogState);
    useEffect(() => {
        dispatch({ type: 'ADMIN_BLOCK_GET_POSTS_STARTED' });
    }, []);

    const {
    } = components;
    return (
        <Fragment>
            <div>
                {adminBlogState.isLoading && <div> loading </div>}
                {!adminBlogState.isLoading && <Fragment>
                    <AdminTitleSection title="Zarządzanie blogiem" />
                    <AdminButton buttonStyle="gray" buttonText="Opublikuj" />
                    {adminBlogState.posts.map(post => <div>{post.title} </div>)}
                </Fragment>
                }
            </div>
        </Fragment>
    );
};

export default AdminBlogComponent;
