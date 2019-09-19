import React, { Fragment } from 'react';

import components from './styles';
import { useDocumentTitle } from '../../../../shared';
import AdminTitleSection from '../../shared/AdminTitleSection';

const AdminBlogNewPostComponent = () => {
    useDocumentTitle('Blog - Nowy post');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Blog - Nowy post" />

        </Fragment>
    );
};

export default AdminBlogNewPostComponent;
