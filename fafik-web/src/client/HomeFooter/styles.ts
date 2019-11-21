import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuProps {
  menuStyle: 'left' | 'right';
}

export default {
  Footer: styled.div`
    background-color: #3e4b39;
    padding: 1.5rem 0;
    margin-top: 2rem;
  `,

  FooterTitle: styled.div`
    font-family: 'DM Serif Text';
    text-align: center;
    color: #ffffff;
    letter-spacing: 0.04rem;
    font-size: 1.4rem;
    padding-bottom: 1rem;
  `,

  FooterMenuSocialMedia: styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
  `,

  Menu: styled.div`
    letter-spacing: 0.04rem;
    font-size: 0.84rem;
    padding: 0 2rem;
    width: 14rem;

    ${(props: MenuProps) =>
      props.menuStyle === 'left' &&
      `
      text-align: end;
      `}
    ${(props: MenuProps) =>
      props.menuStyle === 'right' &&
      `
      text-align: start;
        `}
  `,

  MenuItem: styled.div`
    line-height: 1.7rem;
    cursor: pointer;

    &: hover {
      text-decoration: underline;
    }
  `,

  HorizontalLine: styled.div`
    border-bottom: 0.08rem solid #ffffff;
    width: 5rem;
  `,

  SocialIcons: styled.div`
    display: flex;
    justify-content: space-around;
    width: 4rem;
    padding: 0 1rem;
  `,

  FAwesomeIcon: styled(FontAwesomeIcon)`
    cursor: pointer;
  `,

  ContactCopyrightSection: styled.div`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.09rem;
  `,

  ContactTitle: styled.div`
    font-size: 0.94rem;
  `,

  EmailFrame: styled.div`
    border: 0.06rem solid #ffffff;
    width: 16rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  `,

  Email: styled.div`
    font-size: 0.8rem;
    font-weight: 200;
  `,

  Copyright: styled.div`
    font-size: 0.7rem;
    line-height: 1.1rem;
    text-align: center;
    font-weight: 100;
  `,
};
