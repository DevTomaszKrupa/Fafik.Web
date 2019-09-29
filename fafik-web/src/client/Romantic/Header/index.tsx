import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';


import components from './styles';
import { AppState } from 'application/store/reducers';

import Usual from 'domain/romantic/components/Header/Usual';
import Sticky from 'domain/romantic/components/Header/Sticky';

const HeaderLayout = () => {

  const dispatch = useDispatch();
  const openRsvpDialog = () => dispatch({ type: 'OPEN_ROMANTIC_RSVP_DIALOG' });
  const romanticState = useSelector((state: AppState) => state.romanticState);

  const stickyIsVisible = useStickyHeader();
  const { Header } = components;

  const { header } = romanticState;

  const ItemClicked = (path: string) => {
    switch (path) {
      case 'rsvp':
        openRsvpDialog();
        break;
      case 'o-nas':
      case 'galeria':
      case 'blog':
      case 'dojazd':
      case 'playlista':
      case 'info-dodatkowe':
      case 'plan-wydarzenia':
        scrollToDiv(path);
        break;
    }
  };
  const scrollToDiv = (divId: string) => {
    const element = document.getElementById(divId);
    if (element)
      element.scrollIntoView();
  };

  const dateString: string = moment(header.weddingDate).format('DD.MM.YYYY');
  return (
    <Header headerImage={header.mainImage}>
      {!stickyIsVisible && <Usual
        headerNames={header.headerNames}
        headerQuote={header.headerQuote}
        weddingDate={dateString}
        leftMenuItems={header.leftMenuItems}
        rightMenuItems={header.rightMenuItems}
        onItemClick={ItemClicked} />}
      {stickyIsVisible && <Sticky
        headerNames={header.headerNames}
        leftMenuItems={header.leftMenuItems}
        rightMenuItems={header.rightMenuItems}
        onItemClick={ItemClicked} />}
    </Header>
  );
};

const useStickyHeader = () => {
  const [stickyIsVisible, setStickyIsVisible] = useState(false);

  const handleWindowChange = () => {
    const scrollTop = (window.pageYOffset !== undefined) ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
    setStickyIsVisible(scrollTop > 360 || window.innerWidth < 835);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowChange);
    return () => {
      window.removeEventListener('scroll', handleWindowChange);
    };
  });

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);
    return () => {
      window.removeEventListener('resize', handleWindowChange);
    };
  });
  return stickyIsVisible;
};


export default HeaderLayout;
