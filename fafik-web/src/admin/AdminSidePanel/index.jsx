import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import AdminSidePanelClient from './Client';
import { history } from 'application/helpers';

const AdminSidePanelComponent = () => {
  const adminPanelState = useSelector(state => state.adminPanelState);
  const { isLoading, client } = adminPanelState;

  return (
    <Fragment>
      {isLoading && <span>lołding...</span>}
      {!isLoading && client && <AdminSidePanelClient client={client} key={`client-${client.clientId}`} />}
      {!isLoading && !client && (
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
