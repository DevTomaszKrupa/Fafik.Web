import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuItemProps {
  active: boolean;
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

  @media(max-width: 670px){
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

  @media (max-width: 835px){
    animation: move 7s infinite;
    animation-direction: alternate-reverse;  
    @keyframes move {
      from {right: 0px;}
      to {right: 80px;}
    }
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
  cursor: pointer;

  @media(max-width: 560px){
    width: 24rem;
  }
  `,

  MainMenu: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1% 23%;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;

  @media(max-width:1080px){
    padding: 1.5% 3%;
  }
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

  ${(props: MenuItemProps) => props.active && `
    text-decoration: underline;
  `}
  `,

  VerticalLine: styled.div`
  border-left: 0.08rem solid #253535;
  height: 1rem;
  `,

};
