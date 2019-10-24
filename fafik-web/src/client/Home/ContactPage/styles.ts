import styled from 'styled-components';

export default {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    letter-spacing: 0.09rem;
    color: #253535;
  `,

  MainText: styled.div`
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.9rem;
    padding: 3rem 0 2rem 0;
    font-family: 'Montserrat';
    font-weight: 400;
  `,

  MailBox: styled.div`
    display: flex;
    align-items: center;
  `,

  TextMail: styled.div`
    padding-left: 1.3rem;
    font-weight: 600;
    font-family: 'DM Serif Text';
    font-size: 1.2rem;
    color: #3e4b39;
  `,
};
