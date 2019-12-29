import styled from 'styled-components';

export default {
  SingleLineHorizontal: styled.div`
    width: 14rem;
    height: 0.1rem;
    background-color: #707070;
    margin: 0.5rem 0 1rem 0;
  `,

  QuoteSection: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.8rem 0 3.5rem 0;
    background-image: url('https://i.imgur.com/5PixXri.png'); // TODO
    background-size: 26rem;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  `,

  QuoteText: styled.div`
    font-family: 'Sacramento';
    font-size: 2.3rem;
    text-align: center;
    padding-bottom: 1rem;
    width: 45%;

    @media (max-width: 900px) {
      width: 80%;
    }
  `,

  QuoteAuthor: styled.div`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
  `,
};
