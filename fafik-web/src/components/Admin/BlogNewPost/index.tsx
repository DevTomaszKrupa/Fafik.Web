import React, { Fragment } from 'react';

import { useDocumentTitle } from '../../../shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminBlogNewPostComponent = () => {
    useDocumentTitle('Blog - Nowy post');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Blog - Nowy post" />

            ELOOOOOOOO
        </Fragment>
    );
};

export default AdminBlogNewPostComponent;
