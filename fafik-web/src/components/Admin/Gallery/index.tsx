import React, { Fragment } from 'react';

import { useDocumentTitle } from '../../../shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminGalleryComponent = () => {
    useDocumentTitle('Galeria');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Galeria" />
        </Fragment>
    );
};

export default AdminGalleryComponent;
