import React, { useEffect, Fragment } from 'react';

import components from './main.styles';
import { LeavesMainSiteState } from '../../../../../store/leaves/main/reducers';
import { Action } from '../../../../../store/actions';


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
        <CoupleImage src={'http://localhost/fafik/' + leavesMainSiteState.mainImage} alt="couple" />
      </ImgBox>
      <Counter> do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge> dni.</Counter>
    </Fragment>
  );
};

export default MainLayout;
