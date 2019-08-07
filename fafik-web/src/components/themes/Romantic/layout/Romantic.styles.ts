import styled from "styled-components";

interface ItemProps {
  textAlign: string;
}

export default {
  Header: styled.div`
    flex-grow: 1;
    background-image: url(https://i.imgur.com/2E99Q3y.jpg);
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 5% 0 0 0;
  `,

  Menu: styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    height: 18rem;
  `,

  MenuFrame: styled.div`
    border: 0.07rem solid #707070;
    flex-grow: 1;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  SideMenu: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    padding: 0 1rem;
  `,

  MenuCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  `,

  Item: styled.div`
    text-align: ${(props: ItemProps) => props.textAlign};
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
    cursor: pointer;

    &: hover {
      text-decoration: underline;
    }
  `,

  CenterNames: styled.div`
    font-family: "Sacramento";
    font-size: 3.3rem;
  `,

  CenterDate: styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
  `,

  SingleLineVertical: styled.div`
    height: 8.2rem;
    width: 0.1rem;
    background-color: #707070;
  `,

  SingleLineHorizontal: styled.div`
    width: 14rem;
    height: 0.1rem;
    background-color: #707070;
    margin: 0.5rem 0 1rem 0;
  `,

  CenterQuote: styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: italic;
    text-align: center;
    line-height: 1.4rem;
  `,

  DoubleLineTheme: styled.div`
    border: 0.07rem solid #707070;
    flex-grow: 1;
    padding: 0.3rem;
    margin-top: 1.2rem;
  `,

  AboutUsBox: styled.div`
    background-color: #ffffff;
    flex-grow: 1;
    height: 70%;
    display: flex;
  `,

  AboutUsPhoto: styled.div`
    background-image: url("https://i.imgur.com/h8nhCS7.jpg");
    width: 88%;
    height: 91%;
    background-size: 107%;
    background-repeat: no-repeat;
  `,

  AboutUsPhotoBox: styled.div`
    border: 0.07rem solid #707070;
    width: 19%;
    height: 83%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  AboutUsPhotoFrame: styled.div`
    background-color: #ededec;
    width: 94%;
    height: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `,

  AboutBoxText: styled.div`
    display: flex;
  `,

  TextWelcome: styled.div`
    font-family: "Sacramento";
  `,

  AboutUs: styled.div`
    font-family: "Montserrat", sans-serif;
  `
};
