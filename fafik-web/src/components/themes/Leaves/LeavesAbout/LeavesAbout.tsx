import React, { Fragment } from 'react';

import couple from './couple.jpg';
import components from './LeavesAbout.styles';


const LeavesAbout = () => {
    const { ImgBox, Image, Counter, Badge } = components;

    return (<Fragment>
        <ImgBox>
            <Image src={couple} alt="couple" />
        </ImgBox>
        <Counter> do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge> dni.</Counter>
    </Fragment>
    );
};

export { LeavesAbout };
