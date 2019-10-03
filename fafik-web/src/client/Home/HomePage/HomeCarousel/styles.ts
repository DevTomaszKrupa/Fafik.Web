import styled from 'styled-components';

export default {
  Carousel: styled.div``,

  FeatureBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 16rem;
    justify-content: space-around;
  `,

  SingleFeatureTitle: styled.div`
    color: #ffffff;
    letter-spacing: 0.1rem;
    text-align: center;
    font-size: 1.6rem;
    padding-top: 0.4rem;
  `,

  FeatureDescription: styled.div`
    line-height: 1.4rem !important;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.06rem;
    font-weight: 200;
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
