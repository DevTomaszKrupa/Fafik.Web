import React, { useEffect, Fragment } from 'react';

import { LeavesMainSiteState } from 'application/store/leaves/main/reducers';
import { Action } from 'application/store/actions';
import { IMAGE_STORAGE } from 'application/config';

import components from './main.styles';


type Props = {
  leavesMainSiteState: LeavesMainSiteState;
  getLeavesMainSite: (clientPath: string) => Action;
};

const MainLayout = (props: Props) => {
  const { leavesMainSiteState, getLeavesMainSite } = props;

  const { ImgBox, CoupleImage, Counter, Badge } = components;

  useEffect(() => {
    getLeavesMainSite(leavesMainSiteState.clientPath);
  }, []);

  return (
    <Fragment>
      <ImgBox>
        <CoupleImage src={IMAGE_STORAGE + leavesMainSiteState.mainImage} alt="couple" />
      </ImgBox>
      <Counter> do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge> dni.</Counter>
    </Fragment>
  );
};

export default MainLayout;
