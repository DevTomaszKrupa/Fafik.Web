import React, { Fragment } from 'react';

import { useDocumentTitle } from 'application/shared';

const AdminMySitesComponent = () => {
  useDocumentTitle('Moje strony');
  return (
    <Fragment>
      <div>mojeeee strony</div>
    </Fragment>
  );
};

export default AdminMySitesComponent;
