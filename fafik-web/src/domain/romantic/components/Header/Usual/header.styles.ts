import styled from 'styled-components';

interface ItemProps {
  textAlign: string;
}

interface HeaderProps {
  headerImage: string;
}

export default {
  Menu: styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    height: 18rem;
  `,

  MenuFrame: styled.div`
    border-top 0.07rem solid #707070;
    border-bottom: 0.07rem solid #707070;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
    cursor: pointer;

    &: hover {
      text-decoration: underline;
    }
  `,

  CenterNames: styled.div`
    font-family: 'Sacramento';
    font-size: 3.3rem;
  `,

  CenterDate: styled.div`
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: italic;
    text-align: center;
    line-height: 1.4rem;
  `,
};
