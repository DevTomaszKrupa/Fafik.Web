import styled from 'styled-components';

export default {
    Menu: styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 5px lightgrey solid;
    margin: -10rem 3rem;
    padding-bottom: 1rem;
    `,
    MenuLeft: styled.div`
    display:flex;
    justify-content: space-around;
    flex-grow: 1;
    `,
    MenuCenter: styled.div`
    color: #64805D;
    font-weight: 400;
    margin-bottom: -6rem;
    text-align: center;
    font-style: italic;
    font-size: 3.4rem;
    border: 4px solid lightgrey;
    border-radius: 50%;
    height: 13rem;
    padding: 2rem;
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    transform: rotate(-15deg);
    `,
    MenuRight: styled.div`
    display:flex;
    justify-content: space-around;
    flex-grow: 1;
    `,
    Item: styled.div`
    font-size: 2rem;
    color: black;
    display: flex;
    align-items: flex-end;
    `
};
