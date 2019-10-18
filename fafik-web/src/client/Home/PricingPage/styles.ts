import styled from 'styled-components';
import { IMAGE_STORAGE } from 'application/config';

interface PhotoSquareProps {
  backgroundImage: string;
}

export default {
  IntroBar: styled.div`
    flex-grow: 1;
    background-color: #fdfbfd;
    margin-top: -1rem;
  `,

  IntroTitle: styled.div`
    color: #3e4b39;
    font-family: 'DM Serif Text';
    font-size: 1.9rem;
    letter-spacing: 0.06rem;
    text-align: center;
    padding: 2.5rem 0 1rem 0;
  `,

  IntroSubitle: styled.div`
    color: #3e4b39;
    font-family: 'Montserrat';
    font-size: 0.9rem;
    letter-spacing: 0.08rem;
    text-align: center;
    padding-bottom: 2.5rem;
  `,

  PricingPageMain: styled.div`
    display: flex;
    padding: 4rem 8rem;
  `,

  DescriptionSection: styled.div`
    flex-grow: 1;
  `,

  DescriptionSmallTitle: styled.div`
    font-family: 'Montserrat';
    color: #e3b7ac;
    letter-spacing: 0.07rem;
    font-weight: 600;
    font-size: 0.95rem;
    padding-bottom: 0.3rem;
  `,

  DescriptionBigTitle: styled.div`
    font-family: 'DM Serif Text';
    letter-spacing: 0.03rem;
    font-size: 3rem;
    line-height: 3.7rem;
  `,

  PinkHorizontalLine: styled.div`
    width: 8rem;
    border-top: 0.25rem solid #e3b7ac;
    margin: 1.5rem 0;
  `,

  Description: styled.div`
    font-family: 'Montserrat';
    letter-spacing: 0.05rem;
    font-size: 0.8rem;
    line-height: 1.5rem;
    padding-bottom: 2.8rem;
  `,

  PhotoMiniatures: styled.div`
    display: flex;
  `,

  PhotoSquare: styled.div`
    width: 8.5rem;
    height: 8.5rem;
    background-size: auto 100%;
    background-position: center;
    margin-right: 1.7rem;
    background-image: url(${IMAGE_STORAGE}${(props: PhotoSquareProps) => props.backgroundImage});
  `,

  FeaturesSection: styled.div`
    flex-grow: 2;
    display: flex;
    justify-content: center;
  `,
};
