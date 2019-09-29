import React from 'react';

import components from './styles';
import { RomanticAdditionalInfoProps } from '../../models';

const AdditionalInfoLayout = (props: RomanticAdditionalInfoProps) => {
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
    TextBoxHeaderBottom,
  } = components;

  const { infoCards } = props;
  return (
    <AdditionalInfoSection id="info-dodatkowe">
      <AdditionalInfoHeader> informacje dodatkowe </AdditionalInfoHeader>

      <AdditionalInformationsBoxes>
        {infoCards.map(info => (
          <AdditionalInformationsBox>
            <MainInformationBox>
              <InformationIcon> </InformationIcon>
              <InformationTextBox>
                <TextBoxHeader> {info.header} </TextBoxHeader>
                <TextBoxDescription>{info.description}</TextBoxDescription>
              </InformationTextBox>
            </MainInformationBox>
            <AdditionalInfo>{info.additionalInfo}</AdditionalInfo>
          </AdditionalInformationsBox>
        ))}
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
          <TextBoxDescriptionBottom>Gaja: 738 203 202</TextBoxDescriptionBottom>

          <TextBoxDescriptionBottom>
            Stanisław: 647 214 583
          </TextBoxDescriptionBottom>
        </PhoneNumbers>
      </BottomInfoSection>
    </AdditionalInfoSection>
  );
};

export default AdditionalInfoLayout;
