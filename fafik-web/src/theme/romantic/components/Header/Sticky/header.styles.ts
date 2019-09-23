import styled from 'styled-components';

interface ItemProps {
  textAlign: string;
}

export default {
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
  `,

  StickyMenuTopLine: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,

  StickyMenuIcon: styled.img`
    width: 1.8rem;
    height: 2.1rem;
    padding-left: 1.6rem;
    cursor: pointer;
    display: none;

    @media(max-width: 835px){
      display: block;
    }
  `,

  StickyMenuIconBox: styled.div`
      flex-grow: 1
  `,

  StickyMenuRight: styled.div`
      flex-grow: 1;
  `,

  StickyMenuOptions: styled.div`
    display: flex;
    width: 75%;
    margin-top: -0.6rem;

    @media (max-width: 1100px){
        width: 90%;
    }

    @media(max-width: 835px){
        display: none;
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
    flex-grow: 1;
    text-align: center;
    padding-right: 2rem;
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
  `
};
