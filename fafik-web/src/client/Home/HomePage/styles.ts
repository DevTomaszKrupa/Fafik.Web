import styled from 'styled-components';
import YouTube from 'react-youtube';
import { IMAGE_STORAGE } from 'application/config';

export default {
  BannerBox: styled.div`
  background-image: url("${IMAGE_STORAGE}app/main-banner.jpg");
  padding: 5rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  `,

  BannerInfoBox: styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 3.5rem 0;
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Josefin Sans';
    letter-spacing: 0.17rem;
  `,

  BannerInfoText: styled.div`
    width: 74%;
    text-align: center;
    font-size: 1rem;
    line-height: 2.4rem;
    color: #253535;
  `,

  BannerInfoButton: styled.button`
    width: 51%;
    padding: 0.73rem 0 0.7rem 0;
    background-color: #fdfcfd;
    border: 0.2rem solid #253535;
    margin-top: 1.3rem;
    font-weight: 700;
    font-family: 'Josefin Sans';
    letter-spacing: 0.17rem;
    font-size: 0.97rem;
    color: #253535;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &: focus {
      outline: none;
    }

    &: hover #arrow {
      position: relative;
      animation: moveArrow 2s infinite;
      animation-timing-function: ease;
      animation-direction: alternate-reverse;
      @keyframes moveArrow {
        from {
          left: 0px;
        }
        to {
          left: 20px;
        }
      }
    }
  `,

  ButtonArrow: styled.div`
    padding: 0 0 0.1rem 0.3rem;
  `,

  MeetUsSection: styled.div`
    flex-grow: 1;
    height: 32rem;
    background-color: #fdfbfd;
    display: flex;
  `,

  MeetUsBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5.7rem 3rem 2rem 3rem;
    align-items: center;
  `,

  MeetUsText: styled.div`
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 2.3rem;
    font-family: 'Josefin Sans';
    letter-spacing: 0.16rem;
    color: #253535;
    width: 84%;
  `,

  MeetUsTitle: styled.div`
    text-align: center;
    font-size: 1.4rem;
    font-weight: 800;
    font-family: 'Josefin Sans';
    letter-spacing: 0.3rem;
    color: #253535;
  `,

  HorizontalLine: styled.div`
    width: 8rem;
    border-top: 0.08rem solid #233333;
    margin: 1.3rem 0;
  `,

  MeetUsSignatures: styled.img`
    width: 15rem;
    padding-left: 28rem;
  `,

  MeetUsImg: styled.img`
    height: 32rem;
    width: auto;
  `,

  WhatsThisSection: styled.div`
    height: 32rem;
    flex-grow: 1;
    display: flex;
    font-family: 'Josefin Sans';
    border-top: 1.2rem solid #f6f6f6;
  `,

  VideoSection: styled.div`
    width: 44%;
    background-color: #fdfcfc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0 4rem 0;
  `,

  TextSection: styled.div`
    width: 56%;
    background-color: #fffefe;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;
    justify-content: space-between;
  `,

  YouTubePlayer: styled(YouTube)`
    width: 25rem;
    height: 17rem;
    border-radius: 1.5rem;
  `,

  HomePageButton: styled.button`
    border: 0.25rem solid #f9e2dc;
    background-color: #fffefe;
    width: 23rem;
    height: 2.6rem;
    border-radius: 1.2rem;
    color: #ecccc4;
    font-family: 'Josefin Sans';
    text-align: center;
    letter-spacing: 0.1rem;
    padding-top: 0.1rem;
    font-weight: 600;
    padding: 0 0.8rem 0 0.8rem;
    cursor: pointer;

    &: hover {
      border: 0.25rem solid #d49c8e;
      color: #d49c8e;
    }
  `,

  HomePageVideoButton: styled.button`
    border: 0.25rem solid #bac6b6;
    background-color: #bac6b6;
    width: 23rem;
    height: 2.6rem;
    border-radius: 1.2rem;
    color: #ffffff;
    font-family: 'Josefin Sans';
    text-align: center;
    letter-spacing: 0.1rem;
    padding-top: 0.1rem;
    font-weight: 600;
    padding: 0 0.8rem 0 0.8rem;
    cursor: pointer;

    &: hover {
      background-color: #a9b7a5;
    }
  `,

  ShortLogo: styled.img`
    width: 22rem;
  `,

  WhatsThisTitle: styled.img`
    width: 14rem;
    margin-top: -2rem;
  `,

  WhatsThisText: styled.div`
  text-align: center;
  letter-spacing: 0.1rem;
  font-weight: 400;
  line-height: 1.9rem;
  font-size: 0.9rem;
  width: 77%;
  margin-top: -1.5rem;
}
  `,

  FeaturesSection: styled.div`
    position: relative;
    height: 27rem;
    width: 100%;

    font-family: 'Josefin Sans';
  `,

  FVideo: styled.video`
    object-fit: cover;
    height: 27rem;
    width: 100%;
    position: absolute;
    z-index: -1;
  `,

  TopLayer: styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,

  FeaturesTitle: styled.div`
    text-align: center;
    letter-spacing: 0.3rem;
    color: #ffffff;
    font-size: 2.7rem;
    padding-top: 3rem;
  `,

  FeatureBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 13rem;
    justify-content: space-around;
  `,

  SingleFeatureTitle: styled.div`
    color: #ffffff;
    letter-spacing: 0.1rem;
    text-align: center;
    font-size: 1.4rem;
  `,

  FeatureDescription: styled.div`
    color: #ffffff;
    width: 37%;
    text-align: center;
    letter-spacing: 0.06rem;
    font-weight: 200;
    line-height: 1.4rem !important;
  `,
};
