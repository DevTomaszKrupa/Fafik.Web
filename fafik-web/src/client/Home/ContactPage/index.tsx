import React, { Fragment } from 'react';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import components from './styles';
import { useDocumentTitle } from 'application/shared';
import PageTitleBar from 'client/PageTitleBar';

const ContactPage = () => {
  useDocumentTitle('Kontakt - Miłość Wierność');

  const { MainContainer, MainText, MailBox, TextMail } = components;

  return (
    <Fragment>
      <PageTitleBar title="SKONTAKTUJCIE SIĘ Z NAMI" />
      <MainContainer>
        <MainText>
          Jeśli masz problem z działaniem strony,
          <br />
          bądź chcesz nam przesłać swoje sugestie/opinię, nie zwlekaj i skontaktuj się z nami!
        </MainText>
        <MailBox>
          <FontAwesomeIcon icon={faAt} size="3x" color="#f2d0be" />
          <TextMail>e-mail: wiernoscmilosc@gmail.com</TextMail>
        </MailBox>
      </MainContainer>
    </Fragment>
  );
};
export default ContactPage;
