import React from 'react';
import flower1 from './flower1.png';
import components from './LeavesHeaderLeft.styles';

const LeavesHeaderLeft = () => {
    const { Image } = components;
    return (<Image src={flower1} alt="flower"></Image>);
};

export { LeavesHeaderLeft };
