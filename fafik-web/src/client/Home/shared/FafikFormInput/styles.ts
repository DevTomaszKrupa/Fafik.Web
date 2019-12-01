import styled from 'styled-components';

export default {
  LabelInputBox: styled.div`
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.06rem;
    display: flex;
    align-items: center;
    padding-top: 0.6rem;
    font-family: 'Montserrat';
    justify-content: flex-end;
  `,

  ErrorMessage: styled.span`
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: red;
  `,

  FormInput: styled.input`
    border: 0.15rem solid #e3b7ac;
    border-radius: 2rem;
    height: 2rem;
    width: 16rem;
    margin-left: 0.6rem;
    padding-left: 0.8rem;
    font-size: 0.98rem;
    font-family: 'Montserrat';

    &: focus {
      outline: none;
    }
  `,
};
