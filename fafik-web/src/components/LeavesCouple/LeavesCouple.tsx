import React from 'react';
import couple from './couple.jpg';
import styled from 'styled-components';

const S = {
    ImgBox: styled.div`
    margin-top:11rem;
    padding: 0 3rem;
    `,
    Image: styled.img`
    width: 100%;
    height: 30rem;
    object-fit: cover;
    `
};

const LeavesCouple = () => <S.ImgBox><S.Image src={couple} alt="couple" /></S.ImgBox>;
export { LeavesCouple };
