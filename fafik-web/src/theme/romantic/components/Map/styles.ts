import styled from 'styled-components';

export default {

  MapSection: styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 3rem 0;
    `,

  MapCircle: styled.div`
    background-color: #dfd2ae;
    width: 28rem;
    height: 28rem;
    border-radius: 50%;

    @media(max-width: 900px){
      width: 24rem;
      height: 24rem;
    }
  `,

  MapTitleSubtitle: styled.div`
    width: 66%;
    @media(max-width: 900px){
      padding-right: 1rem;
      width: 50%;
    }

    @media(max-width: 780px){
      padding-right: 0;
      width: 90%;
    }
  `,

  MapTitle: styled.div`
    color: #000000;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.9rem;
    font-weight: 500;
    text-align: center;

    @media(max-width: 900px){
      font-size: 1.7rem;
    }
  `,

  MapSubtitle: styled.div`
    color: #000000
    font-family: "Sacramento";
    text-align: center;
    font-size: 2.1rem;
    line-height: 2.4rem;
    padding: 1.2rem;

    @media(max-width: 900px){
      font-size: 1.9rem;
    }
  `,

  MapTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 900px){
        flex-direction: row;
    }

    @media(max-width: 780px){
      flex-direction: column;
      width: 100%;
    }
  `,

  MapButtons: styled.div`
    display: flex;
    flex-direction: column;
  `,

  MapButton: styled.button`
    background-color: #ebe3cd;
    border: none;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: center;
    width: 22rem;
    height: 3.2rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    cursor: pointer;

    &: hover {
      background-color: #d8ccad;
    }

    @media(max-width: 900px){
      width: 19rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  `,

  MapPart1: styled.div`
    background-image: url("https://i.imgur.com/J8dP9fb.png");
    background-size: 40%;
    background-position: -19% 98%;
    background-repeat: no-repeat;
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    padding-left: 5rem;

    @media(max-width: 900px){
        width: 100%;
        justify-content: center;
        padding-left: 0;
    }
  `,

  MapPart2: styled.div`
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 47%;
    background-position: 124%;
    background-repeat: no-repeat;
    flex-grow: 3;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;

    @media(max-width:900px){
        width: 100%
        padding: 2rem 0;
        background-size: 33%;
        background-position: 119%;
        justify-content: space-around;
    }
    `,
  MapContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 70%;

    @media(max-width: 900px){
      flex-direction: column-reverse;
      width: 100%
    }
  `,
};
