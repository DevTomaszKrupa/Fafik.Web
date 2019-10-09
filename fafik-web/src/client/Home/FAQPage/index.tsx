import React, { Fragment } from 'react';
import components from './styles';

import { useDocumentTitle } from 'application/shared';
import PageTitleBar from 'client/PageTitleBar';

const FAQPage = () => {
  useDocumentTitle('FAQ - Miłość Wierność');

  const {} = components;

  return (
    <Fragment>
      <PageTitleBar title="FAQ - NAJCZĘŚCIEJ ZADAWANE PYTANIA" />
    </Fragment>
  );
};
export default FAQPage;
