import React, { Fragment } from 'react';

import components from './styles';
import { useDocumentTitle } from '../../../application/shared';
import PageTitleBar from '../../../client/PageTitleBar';
import FeaturesList from './FeatureList';

const PricingPage = () => {
  useDocumentTitle('Cennik - Miłość Wierność');

  const {
    IntroBar,
    IntroTitle,
    IntroSubitle,
    PricingPageMain,
    DescriptionSection,
    DescriptionSmallTitle,
    DescriptionBigTitle,
    PinkHorizontalLine,
    Description,
    PhotoMiniatures,
    PhotoSquare,
    FeaturesSection,
  } = components;

  return (
    <Fragment>
      <PageTitleBar title="PRZYKŁADOWA WYCENA USŁUG" />
      <IntroBar>
        <IntroTitle>Minimalizm, prostota, wiele możliwości.</IntroTitle>
        <IntroSubitle>PROSTE PŁATNOŚCI, PROSTA FORMA ROZLICZANIA. </IntroSubitle>
      </IntroBar>
      <PricingPageMain>
        <DescriptionSection>
          <DescriptionSmallTitle>SPRAWDŹCIE NASZĄ OFERTĘ</DescriptionSmallTitle>
          <DescriptionBigTitle>
            I skomponujcie
            <br />
            swój pakiet
          </DescriptionBigTitle>
          <PinkHorizontalLine />
          <Description>
            DRODZY NARZECZENI, W RAMACH PODSTAWOWEGO PAKIETU
            <br />
            OTRZYMUJECIE OD NAS WSZYSTKIE DODATKI OPRÓCZ POTWIERDZANIA
            <br />
            OBECNOŚCI ORAZ GALERII, KTÓRE WYMAGAJĄ DODATKOWEJ OPŁATY.
          </Description>
          <PhotoMiniatures>
            <PhotoSquare backgroundImage="app/Laptop-image.png" />
            <PhotoSquare backgroundImage="app/Smartphone-image.png" />
            <PhotoSquare backgroundImage="app/qr-image.png" />
          </PhotoMiniatures>
        </DescriptionSection>
        <FeaturesSection>
          <FeaturesList />
        </FeaturesSection>
      </PricingPageMain>
    </Fragment>
  );
};
export default PricingPage;
