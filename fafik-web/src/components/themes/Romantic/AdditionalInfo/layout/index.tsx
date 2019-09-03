import React, { Fragment } from 'react';

import components from './AdditionalInfo.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const AdditionalInfoLayout = (props: Props) => {
  const {
    AdditionalInfoSection,
    AdditionalInfoHeader,
    AdditionalInformationsBox,
    MainInformationBox,
    InformationIcon,
    InformationTextBox,
    TextBoxHeader,
    TextBoxDescription,
    AdditionalInfo,
    AdditionalInformationsBoxes,
    AdditionalInformationsDoubleLine,
    DoubleLine,
    PhoneNumbers,
    BottomInfoSection,
    BottomInfoHeader,
    TextBoxDescriptionBottom,
    TextBoxHeaderBottom
  } = components;

  const { } = props.romanticState;

  return (
    <Fragment>
      <AdditionalInfoSection>
        <AdditionalInfoHeader> informacje dodatkowe </AdditionalInfoHeader>

        <AdditionalInformationsBoxes>
          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> NOCLEG </TextBoxHeader>
                <TextBoxDescription>
                  {' '}
                  Różana weranda,
                  <br /> ul. Skłodowskiej-Curie 21
                  <br /> 30-315 Dołek{' '}
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
            <AdditionalInfo>
              {' '}
              Drodzy Goście, chcąc zarezerwować pokój,
              <br />
              prosimy skontaktować się z nami.{' '}
            </AdditionalInfo>
          </AdditionalInformationsBox>

          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> PARKING </TextBoxHeader>
                <TextBoxDescription>
                  Kochani, zarówno przy kościele,
                  <br />
                  jak I przy sali weselnej dostępny
                  <br />
                  jest duży parking, na którym każdy
                  <br />
                  powinien znaleźć miejsce.
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
          </AdditionalInformationsBox>

          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> BUSY </TextBoxHeader>
                <TextBoxDescription>
                  Będą dostępne dwa busy
                  <br />z firmy Jankowski Podróże
                  <br />
                  zaraz po Mszy Św.
                  <br />
                  oraz w godzinach:
                  <br />
                  22:00, 24:00, 3:00.
                </TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
          </AdditionalInformationsBox>
        </AdditionalInformationsBoxes>

        <AdditionalInformationsDoubleLine>
          <DoubleLine />
        </AdditionalInformationsDoubleLine>

        <BottomInfoSection>
          <BottomInfoHeader>

            <InformationIcon> </InformationIcon>

            <TextBoxHeaderBottom> KONTAKT </TextBoxHeaderBottom>

          </BottomInfoHeader>
          <PhoneNumbers>
            <TextBoxDescriptionBottom>
              {' '}
              Gaja: 738 203 202{' '}
            </TextBoxDescriptionBottom>

            <TextBoxDescriptionBottom>
              {' '}
              Stanisław: 647 214 583{' '}
            </TextBoxDescriptionBottom>
          </PhoneNumbers>

        </BottomInfoSection>
      </AdditionalInfoSection>
    </Fragment>
  );
};

export default AdditionalInfoLayout;
