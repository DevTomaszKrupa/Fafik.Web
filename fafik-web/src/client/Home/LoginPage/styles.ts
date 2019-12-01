import styled from 'styled-components';
import RegisterForm from '../shared/RegisterForm';

interface ActionBoxProps {
  boxStyle: 'left' | 'right';
}

interface LoginFormBox {
  isDisplayed: boolean;
}

interface RegisterFormBox {
  isDisplayed: boolean;
}

export default {
  LoginPage: styled.div`
    background-color: #fdfbfd;
  `,

  LoginFormBox: styled.div`
    ${(props: LoginFormBox) =>
      props.isDisplayed &&
      `
      display: flex;
    `}

    ${(props: LoginFormBox) =>
      !props.isDisplayed &&
      `
      display: none;
    `}

    box-shadow: 0.2rem 0.2rem 0.5rem #cec9c9;
    background-color: #ffffff;
    padding: 3rem;
    margin: 2rem 5rem;
    flex-direction: column;
    align-items: center;
  `,

  RegisterFormBox: styled.div`
    ${(props: RegisterFormBox) =>
      props.isDisplayed &&
      `
      display: flex;
    `}

    ${(props: RegisterFormBox) =>
      !props.isDisplayed &&
      `
      display: none;
    `}

    align-items: center;
    flex-direction: column;
    box-shadow: 0.2rem 0.2rem 0.5rem #cec9c9;
    background-color: #ffffff;
    margin: 2rem 5rem;
    padding: 3rem 0;
  `,

  Form: styled(RegisterForm)`
    justify-content: space-around;
    padding: 0 3rem;
  `,

  Header: styled.div`
    font-size: 2rem;
  `,

  IntroBar: styled.div`
    flex-grow: 1;
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
    font-size: 0.85rem;
    line-height: 1.4rem;
    letter-spacing: 0.08rem;
    text-align: center;
    padding-bottom: 2.5rem;
  `,

  ActionBoxes: styled.div`
    display: flex;
    justify-content: center;
  `,

  ActionBox: styled.div`
    font-family: DM Serif Text;
    color: #ffffff;
    display: flex;
    height: 5.8rem;
    width: 25rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;

    ${(props: ActionBoxProps) =>
      props.boxStyle === 'left' &&
      `
      background-color: #CEC9C1;
      `}
    ${(props: ActionBoxProps) =>
      props.boxStyle === 'right' &&
      `
        background-color: #a6b89d;
        `}
  `,

  ActionText: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 1rem;

    ${(props: ActionBoxProps) =>
      props.boxStyle === 'left' &&
      `
      align-items: flex-end;
      `}

    ${(props: ActionBoxProps) =>
      props.boxStyle === 'right' &&
      `
      align-items: flex-start;
    `}
  `,

  Question: styled.div`
    color: #ffffff;
    font-family: 'Montserrat';
    letter-spacing: 0.06rem;
    font-size: 0.88rem;
    font-weight: 500;
  `,

  Action: styled.div`
    color: #ffffff;
    margin-top: -0.2rem;
    font-size: 2.4rem;
    letter-spacing: 0.12rem;
  `,

  ActionBoxDecoration: styled.div`
    width: 0;
    height: 0;
    border-top: 2.9rem solid transparent;
    border-bottom: 2.9rem solid transparent;

    ${(props: ActionBoxProps) =>
      props.boxStyle === 'left' &&
      `
      border-left: 2.9rem solid #fdfbfd;
      `}
    ${(props: ActionBoxProps) =>
      props.boxStyle === 'right' &&
      `
        border-right: 2.9rem solid #fdfbfd;
        `}
  `,

  ActionButton: styled.button`
    background-color: #f2d0be;
    color: #ffffff;
    padding: 1rem 0;
    width: 15rem;
    margin-top: 1.5rem;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1.03rem;
    letter-spacing: 0.07rem;
    font-weight: 600;
  `,
};
