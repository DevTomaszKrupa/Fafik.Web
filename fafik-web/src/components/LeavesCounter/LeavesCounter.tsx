import React from 'react';
import styled from 'styled-components';

const S = {
    Counter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding-top: 2rem;
    `,
    Badge: styled.div`
    padding: 0.3rem;
    border-radius: 50%;
    background-color: burlywood;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;`
}
const LeavesCounter = () =>
    <S.Counter>
        do naszego ślubu zostało: <S.Badge>11</S.Badge> miesięcy, <S.Badge>8</S.Badge> dni.
    </S.Counter>
export { LeavesCounter };
