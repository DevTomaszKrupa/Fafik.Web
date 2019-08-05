import React from 'react';
import { LeavesHeaderRight } from '../LeavesHeaderRight/LeavesHeaderRight';
import { LeavesHeaderLeft } from '../LeavesHeaderLeft/LeavesHeaderLeft';
import { LeavesHeaderMenu } from '../LeavesHeaderMenu/LeavesHeaderMenu';
import { LeavesCouple } from '../LeavesCouple/LeavesCouple';
import { LeavesCounter } from '../LeavesCounter/LeavesCounter';
import components from './Leaves.styles';

type Props = {
    logoNames: string;
};

const Leaves = (props: Props) => {
    const { Header, Images } = components;

    return (
        <Header>
            <Images>
                <LeavesHeaderLeft />
                <LeavesHeaderRight />
            </Images>
            <LeavesHeaderMenu logoNames={props.logoNames} />
            <LeavesCouple />
            <LeavesCounter />
        </Header>);
};

export { Leaves };
