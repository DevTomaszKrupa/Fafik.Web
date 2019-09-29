import styled from 'styled-components';

export default {

  AdditionalInfoSection: styled.div`
    flex-grow: 1;
    background-color: #726257;
    background-image: url("https://i.imgur.com/zNjU7AO.png");
    background-size: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  `,

  AdditionalInfoHeader: styled.div`
    color: #ffffff;
    font-family: "Sacramento";
    font-size: 3.8rem;
  `,

  AdditionalInformationsBox: styled.div`
    flex-grow: 1;
    padding: 2.5rem;

    @media(max-width: 1200px){
      padding: 2.5rem 0.7rem 1.2rem 0.7rem;
    }

    @media(max-width: 1033px){
      flex-grow: 0;
    }

  `,

  MainInformationBox: styled.div`
    display: flex;
  `,

  InformationIcon: styled.div`
    height: 3.2rem;
    width: 3.2rem;
    border: 0.4rem solid #ffffff;
    border-radius: 50%;
    display: flex;
  `,

  InformationTextBox: styled.div`
    padding: 1.1rem 0 0 1.1rem;
  `,

  TextBoxHeader: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-weight: 600;
    font-size: 1.8rem;
    padding-bottom: 0.9rem;
  `,

  TextBoxDescription: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 0.9rem;
    line-height: 1.7rem;
    font-weight: 500;
  `,

  AdditionalInfo: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 0.75rem;
    padding-top: 1rem;
    line-height: 1.3rem;
    font-weight: 200;
  `,

  AdditionalInformationsBoxes: styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1033px){
      flex-wrap: wrap;
      justify-content: center;
    };

    @media(max-width: 750px){
      justify-content: flex-start;
      padding-left: 2rem;
    }

  `,

  AdditionalInformationsDoubleLine: styled.div`
    width: 100%;
    padding-top: 1.3rem;
  `,

  DoubleLine: styled.div`
    border-bottom: 0.07rem solid #ffffff;
    border-top: 0.07rem solid #ffffff;
    flex-grow: 1;
    padding: 0.3rem;
    margin-top: 1.2rem;
  `,

  BottomInfoSection: styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-around;
    width: 100%;
    padding-top: 2.3rem;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    text-align: center;
    `,

  PhoneNumbers: styled.div`
  `,

  BottomInfoHeader: styled.div`
    display: flex;
    align-items: center;
  `,

  TextBoxHeaderBottom: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-weight: 600;
    font-size: 1.8rem;
    padding: 0 3rem 0 1.1rem;
  `,

  TextBoxDescriptionBottom: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 1.3rem;
    padding-top: 0.7rem;
    font-weight: 200;

    @media(max-width: 880px){
      font-size: 1.2rem;
    }
  `,
};
