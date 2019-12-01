import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import AdminSidePanelClient from './Client';
import { history } from 'application/helpers';

const AdminSidePanelComponent = () => {
  const adminSidePanelState = useSelector((state: any) => state.adminSidePanelState);
  const { isLoading, clients } = adminSidePanelState;

  return (
    <Fragment>
      {isLoading && <span>lołding...</span>}
      {!isLoading && clients.map((client: any) => <AdminSidePanelClient client={client} key={`client-${client.name}`} />)}
      {!isLoading && clients.length === 0 && (
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
