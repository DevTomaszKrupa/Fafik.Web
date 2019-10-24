import styled from 'styled-components';

export default {
  Carousel: styled.div``,

  FeatureBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 14rem;
    justify-content: space-around;
  `,

  SingleFeatureTitle: styled.div`
    color: #ffffff;
    letter-spacing: 0.06rem;
    text-align: center;
    padding-top: 0.4rem;
    font-family: 'DM Serif Text';
    font-weight: 100;
    font-size: 2rem;
  `,

  FeatureDescription: styled.div`
    line-height: 1.6rem !important;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.06rem;
    font-family: 'Montserrat';
    font-size: 0.9rem;
    font-weight: 300;
  `,

  PreviousButton: styled.div`
    background-color: #ffffff;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    z-index: 100;
  `,

  NextButton: styled.div``,
};
