import React, { Fragment } from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminStatsComponent = () => {
    useDocumentTitle('Statystyki');

    const {
    } = components;
    return (
        <Fragment>
            <AdminTitleSection title="Statystyki" />
        </Fragment>
    );
};

export default AdminStatsComponent;
