import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import { IMAGE_STORAGE } from 'application/config';

import components from './styles';
import listelements from './list';

const FeaturesList = () => {
  const dispatch = useDispatch();
  const featureListState = useSelector((state: AppState) => state.featureListState);

  const {
    FeatureList,
    FeatureBox,
    CheckboxBox,
    CheckboxImage,
    TextBox,
    Title,
    Description,
    LastCheckboxBox,
    LastTextBox,
    Checkbox,
  } = components;

  const onRSVPFeatureClick = () => {
    dispatch({ type: 'FEATURE_LIST_SET_RSVP' });
  };
  const onGalleryFeatureClick = () => {
    dispatch({ type: 'FEATURE_LIST_SET_GALLERY' });
  };

  return (
    <FeatureList>
      {listelements.map(listelement => (
        <FeatureBox>
          <CheckboxBox>
            <CheckboxImage src={`${IMAGE_STORAGE}app/Checkbox-checked.png`} />
          </CheckboxBox>
          <TextBox>
            <Title>{listelement.title}</Title>
            <Description>{listelement.description}</Description>
          </TextBox>
        </FeatureBox>
      ))}
      <FeatureBox>
        <CheckboxBox>
          <Checkbox type="checkbox" checked={featureListState.isRSVPChecked} onClick={onRSVPFeatureClick} />
        </CheckboxBox>
        <TextBox cursor="pointer" onClick={onRSVPFeatureClick}>
          <Title>RSVP</Title>
          <Description>POTWIERDZENIE OBECNOŚCI SMS + E-MAIL</Description>
        </TextBox>
      </FeatureBox>

      <FeatureBox>
        <LastCheckboxBox>
          <Checkbox type="checkbox" checked={featureListState.isGalleryChecked} onClick={onGalleryFeatureClick} />
        </LastCheckboxBox>
        <LastTextBox onClick={onGalleryFeatureClick}>
          <Title>GALERIA</Title>
          <Description>POKAŻCIE SWOJE ZDJĘCIA GOŚCIOM!</Description>
        </LastTextBox>
      </FeatureBox>
    </FeatureList>
  );
};
export default FeaturesList;
