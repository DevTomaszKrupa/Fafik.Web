import styled from 'styled-components';
import YouTube from 'react-youtube';
import { IMAGE_STORAGE } from 'application/config';

interface InstructionNumberProps {
  backgroundColor: string;
}

interface StepTItleProps {
  color: string;
}

export default {
  GoUpButton: styled.div`
    background-color: #3e4b39;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    bottom: 4rem;
    right: 3rem;
    z-index: 101;
    box-shadow: 0 0 9px darkgrey;
  `,

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
    background-color: rgba(255, 255, 255, 0.45);
    padding: 3.5rem 0;
    width: 47%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat';
    letter-spacing: 0.14rem;
  `,

  BannerInfoText: styled.div`
    width: 69%;
    text-align: center;
    font-size: 0.9rem;
    line-height: 2.4rem;
    color: #253535;
    font-weight: 500;
  `,

  BannerInfoButton: styled.button`
    width: 51%;
    padding: 0.73rem 0 0.7rem 0;
    background-color: #fdfcfd;
    border: 0.2rem solid #253535;
    margin-top: 1.45rem;
    font-weight: 700;
    font-family: 'DM Serif Text';
    letter-spacing: 0.08rem;
    font-size: 1.1rem;
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
    padding: 4.7rem 3rem 2rem 3rem;
    align-items: center;
  `,

  MeetUsText: styled.div`
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 2.3rem;
    font-family: 'Montserrat';
    letter-spacing: 0.13rem;
    color: #253535;
    width: 80%;
  `,

  MeetUsTitle: styled.div`
    text-align: center;
    letter-spacing: 0.05rem;
    font-size: 2.3rem;
    font-family: 'DM Serif Text';
    letter-spacing: 0.05rem;
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
    font-family: 'Montserrat';
    text-align: center;
    letter-spacing: 0.1rem;
    padding-top: 0.1rem;
    font-weight: 600;
    padding: 0 0.8rem 0 0.8rem;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.18rem #e2dcdc;

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
    width: 9rem;
    margin-top: -2rem;
  `,

  WhatsThisText: styled.div`
  text-align: center;
  letter-spacing: 0.09rem;
  font-weight: 400;
  line-height: 1.9rem;
  font-family: 'Montserrat';
  font-size: 0.8rem;
  width: 76%;
  margin-top: -1.5rem;
}
  `,

  FeaturesSection: styled.div`
    position: relative;
    height: 29rem;
    width: 100%;

    font-family: 'Josefin Sans';
  `,

  FVideo: styled.video`
    object-fit: cover;
    opacity: 0.92;
    height: 29rem;
    width: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(4px);
  `,

  TopLayer: styled.div`
    background-color: rgba(242, 208, 109, 0.2);
    height: 100%;
    width: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,

  FeaturesTop: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  FeaturesTitle: styled.div`
    text-align: center;
    letter-spacing: 0.05rem;
    color: #ffffff;
    padding-top: 2.8rem;
    font-family: 'DM Serif Text';
    font-weight: 500;
    font-size: 3rem;
  `,

  InstructionSection: styled.div`
  background-image: url("${IMAGE_STORAGE}app/eucalyptus.png") ;
  background-repeat: no-repeat;
  background-size: 122% auto;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-family: 'Josefin Sans';
  `,

  InstructionTitleSmall: styled.div`
    font-weight: 400;
    font-family: 'Montserrat';
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 5rem 0 0.2rem 0;
  `,

  InstructionTitleBig: styled.div`
    font-size: 3.5rem;
    padding-bottom: 0.6rem;
    font-family: 'DM Serif Text';
    font-weight: 500;
    letter-spacing: 0.1rem;
  `,

  InstructionStepByStep: styled.div`
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    width: 80%;
    padding: 1.3rem 0 4rem 0;
  `,

  InstructionStep: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  InstructionNumber: styled.div`
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background-color: ${(props: InstructionNumberProps) => props.backgroundColor};
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7rem;
    font-family: 'DM Serif Text';
  `,

  StepTItle: styled.div`
    padding: 1.7rem 0 1rem 0;
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: 0.14rem;
    font-family: 'DM Serif Text';
    font-size: 1.6rem;
    text-align: center;
    line-height: 2rem;
}
    color: ${(props: StepTItleProps) => props.color};
  `,

  StepDescription: styled.div`
    font-family: 'Montserrat';
    font-size: 0.85rem;
    line-height: 1.4rem;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.09rem;
  `,
};
