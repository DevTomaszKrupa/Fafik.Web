import styled from "styled-components";

interface ItemProps {
  textAlign: string;
}

interface HeaderProps {
  headerImage: string;
}

export default {
  Header: styled.div`
    flex-grow: 1;
    background-image: ${(props: HeaderProps) =>
      `url("http://localhost/Fafik/${props.headerImage}")`};
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100rem;
    background-position: center;
    padding-top: 5%;
  `,

  StickyMenu: styled.div`
    display: flex;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    height: 13%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 1;
    top: 0;

    // display: none;
  `,

  StickyMenuOptions: styled.div`
    display: flex;
    width: 75%;
    margin-top: -0.6rem;

    @media (max-width: 1100px){
        width: 90%;

    }
  `,

  SideStickyMenu: styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
    justify-content: space-around;
  `,

  StickyCenterNames: styled.div`
    font-family: "Sacramento";
    font-size: 2.7rem;
    padding-top: 0.6rem;
  `,

  StickyItem: styled.div`
    text-align: ${(props: ItemProps) => props.textAlign};
    font-size: 0.9rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
    cursor: pointer;

    &: hover {
      text-decoration: underline;
    }
  `,

  Menu: styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    height: 18rem;

    @media (max-width: 835px) {
      display: none;
    }
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
  `
};
