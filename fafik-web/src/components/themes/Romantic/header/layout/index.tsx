import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Sticky from '../Sticky';
import Usual from '../Usual';

import components from './header.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';
import { Action } from '../../../../../store/actions';

type Props = {
  romanticState: RomanticState;
  openRsvpDialog: () => Action;
};

const HeaderLayout = (props: Props) => {
  const stickyIsVisible = useStickyHeader();
  const { Header } = components;

  const { romanticState, openRsvpDialog } = props;
  const { header } = romanticState;

  const ItemClicked = (path: string) => {
    switch (path) {
      case 'rsvp':
        openRsvpDialog();
        break;
    }
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
