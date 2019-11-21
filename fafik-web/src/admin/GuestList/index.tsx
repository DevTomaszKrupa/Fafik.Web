import React from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';

const AdminGuestListComponent = () => {
  useDocumentTitle('Lista Gości');

  return <AdminTitleSection title="Lista Gości" />;
};

export default AdminGuestListComponent;
