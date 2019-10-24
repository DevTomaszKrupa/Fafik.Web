import styled from 'styled-components';

export default {
  SectionTitle: styled.div`
    font-size: 2.3rem;
    font-weight: 700;
    letter-spacing: 0.08rem;
    text-align: center;
    font-family: 'DM Serif Text';
  `,

  Subtitle: styled.div`
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-align: center;
    line-height: 1.6rem;
    padding-top: 0.8rem;
    font-family: 'Montserrat';
    font-size: 0.92rem;
  `,

  MainForm: styled.form`
    display: flex;
    justify-content: space-around;
    padding: 1.4rem 0 0 1rem;
  `,

  LoginInputs: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,

  InputBox: styled.div`
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.06rem;
    display: flex;
    align-items: center;
    padding-top: 0.6rem;
    font-family: 'Montserrat';
  `,

  GeneralInputs: styled.div``,

  CheckboxBox: styled.div`
    display: flex;
    padding-top: 1.5rem;
  `,

  Checkbox: styled.input``,

  CheckboxText: styled.div`
    letter-spacing: 0.05rem;
    font-size: 0.65rem;
    padding-left: 0.4rem;
    line-height: 1.1rem;
    cursor: pointer;
  `,
};
