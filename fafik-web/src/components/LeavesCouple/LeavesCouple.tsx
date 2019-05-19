import React from 'react';
import couple from './couple.jpg';
import styled from 'styled-components';

const S = {
    ImgBox: styled.div`
    margin-top:11rem;
    padding: 0 3rem;
    `
}
const divStyle = {
    width: '100%',
    height: '30rem',
    // objectFit: 'cover'
};
const LeavesCouple = () => <S.ImgBox><img src={couple} style={divStyle} alt="couple" /></S.ImgBox>;
export { LeavesCouple };
