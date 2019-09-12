import React, { Fragment } from 'react';

import { useDocumentTitle } from '../../../shared';


const AdminBlogComponent = () => {
    useDocumentTitle('Blog');
    return (
        <Fragment>
            <div>
                DZIECKO Z NERDAMI BLOG
            </div>
        </Fragment>);
};

export default AdminBlogComponent;
