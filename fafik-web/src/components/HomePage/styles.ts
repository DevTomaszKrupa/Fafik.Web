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

  &: hover{
    text-decoration: underline;
  };
  `,

  VerticalLine: styled.div`
  border-left: 0.08rem solid #000000;
  height: 1rem;
  `,
};
