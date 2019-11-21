import React from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';

const AdminPlaylistComponent = () => {
  useDocumentTitle('Playlista');

  return <AdminTitleSection title="Playlista" />;
};

export default AdminPlaylistComponent;
