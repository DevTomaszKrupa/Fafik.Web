import React, { Fragment } from 'react';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import QRCode from '../shared/QRComponent';
import components from './styles';

const AdminGalleryComponent = () => {
  useDocumentTitle('Galeria');

  const UserName: string = 'kasia-i-daniel';

  const {} = components;
  return (
    <Fragment>
      <AdminTitleSection title="Galeria" />
      <QRCode value={`www.miloscwiernosc.pl/${UserName}`} /> {/*TODO Get this from global variable*/}
    </Fragment>
  );
};

export default AdminGalleryComponent;
