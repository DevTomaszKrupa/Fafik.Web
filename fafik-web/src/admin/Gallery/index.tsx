import React from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';

const AdminGalleryComponent = () => {
  useDocumentTitle('Galeria');

  return <AdminTitleSection title="Galeria" />;
};

export default AdminGalleryComponent;
