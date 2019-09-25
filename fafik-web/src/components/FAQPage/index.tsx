import React, { Fragment } from 'react';
import components from './styles';
import TopBar from '../TopBar';

import { useDocumentTitle } from '../../shared';


const FAQPage = () => {
  useDocumentTitle('FAQ - Miłość Wierność');

  const {
  } = components;

  return (
    <Fragment>
      <TopBar />
    </Fragment>
  );
};
export default FAQPage;
