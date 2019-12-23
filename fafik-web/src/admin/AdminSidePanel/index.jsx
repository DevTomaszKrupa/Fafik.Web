import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import AdminSidePanelClient from './Site';
import { history } from 'application/helpers';

const AdminSidePanelComponent = () => {
  const adminPanelState = useSelector(state => state.adminPanelState);
  const { isLoading, site } = adminPanelState;

  return (
    <Fragment>
      {isLoading && <span>lołding...</span>}
      {!isLoading && site && <AdminSidePanelClient client={site} key={`site-${site.siteId}`} />}
      {!isLoading && !site && (
        <div
          onClick={() => history.push('/admin/wybierz-motyw')}
          style={{
            display: 'flex',
            fontSize: '24px',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          + Dodaj strone
        </div>
      )}
    </Fragment>
  );
};

export default AdminSidePanelComponent;
