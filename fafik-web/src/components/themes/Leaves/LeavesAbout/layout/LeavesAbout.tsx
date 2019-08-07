import React, { Fragment } from 'react';

import components from './LeavesAbout.styles';
import { ClientState } from '../../../../../store/client/reducers';


type Props = {
    clientState: ClientState;
};

const LeavesAboutLayout = (props: Props) => {
    const { ImgBox, Image, Counter, Badge } = components;
    const { clientState } = props;

    return (<Fragment>
        <ImgBox>
            <Image src={process.env.PUBLIC_URL + '/LeavesTestData/first/couple.jpg'} alt="couple" />
        </ImgBox>
        <Counter> do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge> dni.</Counter>
    </Fragment>
    );
};

export default LeavesAboutLayout;
