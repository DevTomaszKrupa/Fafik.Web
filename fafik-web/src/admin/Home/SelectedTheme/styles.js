import styled from 'styled-components';
import { IMAGE_STORAGE } from 'application/config';

export default {
  ChoiceBox: styled.div`
    width: 80%;
    font-family: 'Montserrat';
    padding: 2rem 0;
  `,

  ThemeOptionBox: styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    height: 17rem;
  `,

  SideThemePanel: styled.div`
    flex-grow: 3;
    background-color: #fbf9f1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  TopDecoration: styled.div`
    height: 0.7rem;
    width: 100%
    background-color: #E8493E;
  `,

  MainBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.08rem;
  `,

  ThemeNameBox: styled.div`
    background-color: #e8dfc7;
    color: #ffffff;
    font-family: 'DM Serif Text';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    padding: 1.3rem 0;
  `,

  ThemeFrame: styled.div`
    flex-grow: 4;
    border: 0.2rem solid #dbcfc5;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ThemeImage: styled.div`
    width: 91%;
    height: 91%;
    background-image: url("${IMAGE_STORAGE}/app/Leaves-theme-img.png");
    background-size: 106%;
    background-repeat: no-repeat;
  `,

  BottomDecoration: styled.div`
    background-color: #e8dfc7;
    height: 0.7rem;
  `,

  Feature: styled.div``,

  CheckboxImage: styled.img``,

  FeatureTitle: styled.div``,

  FeatureDescription: styled.div``,
};
