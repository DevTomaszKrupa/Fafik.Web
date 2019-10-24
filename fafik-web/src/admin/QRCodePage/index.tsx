import React, { Fragment } from 'react';
import QRCode from '../shared/QRComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { IMAGE_STORAGE } from 'application/config';

import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';

const AdminQRCodePage = () => {
  useDocumentTitle('Kod QR');

  const UserName: string = 'kasia-i-daniel';

  const { PageDescription, QRInfographic, QRgraphic, QRMain, QRFrame } = components;
  return (
    <Fragment>
      <AdminTitleSection title="Wasz kod QR" />
      <PageDescription>
        Drodzy narzeczeni, oto Wasz kod QR. Jest on generowany pod wybrany przez Was adres strony.
        <br />
        Możecie go umieszczać na zaproszeniach, wysyłać w wiadomościach… Jest cały Wasz!
        <br />
        Ale pamiętajcie, że gdy zmienicie adres, powinniście go zaktualizować na Waszych wydrukach.
      </PageDescription>
      <QRInfographic>
        <QRgraphic src={`${IMAGE_STORAGE}app/QR-letter.png`} />
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="5x" color="#DBCFC5" />
        <QRMain>
          <QRFrame>
            <QRCode value={`www.miloscwiernosc.pl/${UserName}`} /> {/*TODO Get this from global variable*/}
          </QRFrame>
        </QRMain>
        <FontAwesomeIcon icon={faAngleDoubleRight} size="5x" color="#DBCFC5" />
        <QRgraphic src={`${IMAGE_STORAGE}app/QR-message.png`} />
      </QRInfographic>
    </Fragment>
  );
};

export default AdminQRCodePage;
