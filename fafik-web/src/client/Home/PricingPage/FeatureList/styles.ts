import styled from 'styled-components';

export default {
  FeatureList: styled.div``,

  FeatureBox: styled.div`
    display: flex;
    font-family: 'Montserrat';
  `,

  CheckboxBox: styled.div`
    border-right: 0.09rem solid #847474;
    border-bottom: 0.09rem solid #847474;
    display: flex;
    align-items: center;
    width: 3.5rem;
    justify-content: center;
  `,

  CheckboxImage: styled.img`
    width: 1.4rem;
    height: auto;
  `,

  TextBox: styled.div`
    border-bottom: 0.09rem solid #847474;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.6rem 0 0.6rem 1rem;
    width: 25rem;
  `,

  Title: styled.div`
    font-size: 1.1rem;
    font-weight: 600;
  `,

  Description: styled.div`
    font-size: 0.8rem;
    letter-spacing: 0.07rem;
    padding: 0.3rem 0 0 0.8rem;
  `,

  LastTextBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.6rem 0 0.6rem 1rem;
    width: 25rem;
  `,

  Checkbox: styled.input`
    transform: scale(1.4);
    cursor: pointer;

    &: focus {
      outline: 0.1rem solid #e3b7ac;
    }

    &:hover:before {
      background-color: red;
    }
  `,

  PriceBox: styled.div`
    background-color: #fdfbfd;
    font-family: DM Serif Text;
    font-size: 3rem;
  `,
};
