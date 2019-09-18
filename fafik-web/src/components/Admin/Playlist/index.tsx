import React, { Fragment } from 'react';

import { useDocumentTitle } from '../../../shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminPlaylistComponent = () => {
    useDocumentTitle('Playlista');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Playlista" />
        </Fragment>
    );
};

export default AdminPlaylistComponent;
