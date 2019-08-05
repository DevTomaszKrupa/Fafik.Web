import React from 'react';
import couple from './couple.jpg';
import components from './LeavesCouple.styles';

const LeavesCouple = () => {
    const { ImgBox, Image } = components;

    return (<ImgBox><Image src={couple} alt="couple" /></ImgBox>);
};

export { LeavesCouple };
