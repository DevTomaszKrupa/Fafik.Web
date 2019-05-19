import React from 'react';
import { LeavesHeaderRight } from '../LeavesHeaderRight/LeavesHeaderRight';
import { LeavesHeaderLeft } from '../LeavesHeaderLeft/LeavesHeaderLeft';
import { LeavesHeaderMenu } from '../LeavesHeaderMenu/LeavesHeaderMenu';
import { LeavesCouple } from '../LeavesCouple/LeavesCouple';
import { LeavesCounter } from '../LeavesCounter/LeavesCounter';
import styled from 'styled-components';

const S = {
    Header: styled.div`
    display: flex;
    flex-direction: column;
    `,
    Images: styled.div`
    display: flex;
    justify-content: space-between;
    `
}
const Leaves = () =>
    <S.Header>
        <S.Images>
            <LeavesHeaderLeft />
            <LeavesHeaderRight />
        </S.Images>
        <LeavesHeaderMenu />
        <LeavesCouple />
        <LeavesCounter />
    </S.Header>;
export { Leaves };
