import React, { Fragment } from 'react';

import components from './styles';
import { useDocumentTitle } from 'application/shared';
import PageTitleBar from 'client/PageTitleBar';

const PricingPage = () => {
  useDocumentTitle('Cennik - Miłość Wierność');

  const {} = components;

  return (
    <Fragment>
      <PageTitleBar title="PRZYKŁADOWA WYCENA USŁUG" />
    </Fragment>
  );
};
export default PricingPage;
