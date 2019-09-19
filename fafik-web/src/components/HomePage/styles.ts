import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  `,

  SocialIcons: styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  `,

  FAwesomeIcon: styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;

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
  height: 21%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.08rem solid #707070;
  `,

  MainLogo: styled.img`
  width: 30%;
  padding-top: 1rem;
  `,

  MainMenu: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 19%;
  height: 6.5%;
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

  &: focus{
    outline: none;
  }
  `,

};
