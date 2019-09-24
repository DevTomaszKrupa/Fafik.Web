import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';

interface HomePageButton {
  backgroundColor: string;
  border: string;
  color: string;
}

export default {
  TopBar: styled.div`
  display: flex;
  flex-grow: 1;
  height: 2rem;
  `,

  TopBarLeft: styled.div`
  flex-grow: 5;
  background-color: #E3B7AC;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 2.3rem;
  `,

  TopBarRight: styled.div`
  flex-grow: 2;
  background-color: #FDFBFD;
  border: 0.1rem solid #E3B7AC;
  height: 1.8rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;

  @media(max-width: 600px){
    display: none;
  }
  `,

  SocialIcons: styled.div`
  width: 3.3rem;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  `,

  FAwesomeIcon: styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    -webkit-animation:spin 3s linear infinite;
    -moz-animation:spin 3s linear infinite;
    animation:spin 3s linear infinite;

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  }
  `,

  TopBartLeftTitle: styled.div`
  color: #FFFFFF;
  font-family: 'Josefin Sans';
  font-size: 0.8rem;
  font-weight: 600;
  padding-top: 0.15rem;
  letter-spacing: 0.1rem;
  
  position: relative;
  animation: move 10s infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;  
  @keyframes move {
    from {right: 0px;}
    to {right: 200px;}
  }
  `,

  TopBartRightTitle: styled.div`
  color: #E3B7AC;
  font-family: 'Josefin Sans';
  font-size: 0.8rem;
  font-weight: 600;
  padding-top: 0.15rem;
  letter-spacing: 0.1rem;
  `,

  LogoSection: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.08rem solid #707070;
  `,

  MainLogo: styled.img`
  width: 28rem;
  padding: 4rem 0 3rem 0;

  @media(max-width: 560px){
    width: 24rem;
  }
  `,

  MainMenu: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1% 19%;
  `,

  MenuItem: styled.div`
  cursor: pointer;
  font-family: 'Josefin Sans';
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  color: #253535;

  &: hover{
    text-decoration: underline;
  };
  `,

  VerticalLine: styled.div`
  border-left: 0.08rem solid #253535;
  height: 1rem;
  `,

  BannerBox: styled.div`
  background-image: url("http://localhost/Fafik/App/main-banner.jpg");
  height: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  `,

  BannerInfoBox: styled.div`
  background-color: rgba(255,255,255,0.5);
  height: 71%;
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
  height: 17%;
  background-color: #FDFCFD;
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

  &: focus{
    outline: none;
  }

  &: hover #arrow{
    position: relative;
    animation: moveArrow 2s infinite;
    animation-timing-function: ease;
    animation-direction: alternate-reverse;
    @keyframes moveArrow {
      from {left: 0px;}
      to {left: 20px;}
    }
  }
  `,

  ButtonArrow: styled.div`
  padding: 0 0 0.1rem 0.3rem;
  
  // &: hover{
  //   animation: moveArrow 2s infinite;
  //   animation-timing-function: ease;
  //   animation-direction: alternate-reverse;
  //   @keyframes moveArrow {
  //     from {left: 0px;}
  //     to {left: 20px;}
  //   }
  // }
  `,

  MeetUsSection: styled.div`
  flex-grow: 1;
  height: 32rem;
  background-color: #FDFBFD;
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
  border-top: 1.2rem solid #F6F6F6;
  `,

  VideoSection: styled.div`
  width: 44%;
  background-color: #FDFCFC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0 4rem 0;
  `,

  TextSection: styled.div`
  width: 56%;
  background-color: #FFFEFE;
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
  border: ${(props: HomePageButton) => props.border};
  background-color: ${(props: HomePageButton) => props.backgroundColor};
  width: 23rem;
  height: 2.6rem;
  border-radius: 1.2rem;
  color: ${(props: HomePageButton) => props.color};
  font-family: 'Josefin Sans';
  text-align: center;
  letter-spacing: 0.1rem;
  padding-top: 0.1rem;
  font-weight: 600;
  padding: 0 0.8rem 0 0.8rem;
  cursor: pointer;
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
};
