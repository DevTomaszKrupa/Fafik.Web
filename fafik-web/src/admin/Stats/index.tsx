import React from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';

const AdminStatsComponent = () => {
  useDocumentTitle('Statystyki');

  return <AdminTitleSection title="Statystyki" />;
};

export default AdminStatsComponent;
