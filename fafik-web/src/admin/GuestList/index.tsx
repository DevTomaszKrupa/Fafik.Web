import React, { Fragment } from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminGuestListComponent = () => {
    useDocumentTitle('Lista Gości');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Lista Gości" />
        </Fragment>
    );
};

export default AdminGuestListComponent;
