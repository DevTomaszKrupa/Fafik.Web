import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IMAGE_STORAGE } from 'application/config';

import components from './styles';

const MainLayout = () => {
  const leavesMainSiteState = useSelector(state => state.leavesMainSiteState);
  const dispatch = useDispatch();

  const { ImgBox, CoupleImage, Counter, Badge } = components;

  useEffect(() => {
    dispatch({ type: 'GET_LEAVES_MAIN_SITE_STARTED', payload: leavesMainSiteState.clientName });
  }, [leavesMainSiteState.clientName, dispatch]);

  return (
    <Fragment>
      <ImgBox>
        <CoupleImage src={IMAGE_STORAGE + leavesMainSiteState.mainImage} alt="couple" />
      </ImgBox>
      <Counter>
        do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge>
        dni.
      </Counter>
    </Fragment>
  );
};

export default MainLayout;
