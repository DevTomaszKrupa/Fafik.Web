import React from 'react';

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

  return (
    <Header headerImage={header.mainImage}>
      <Usual
        headerNames={header.headerNames}
        headerQuote={header.headerQuote}
        weddingDate={header.weddingDate}
        leftMenuItems={header.leftMenuItems}
        rightMenuItems={header.rightMenuItems}
        onItemClick={ItemClicked} />
      <Sticky
        headerNames={header.headerNames}
        leftMenuItems={header.leftMenuItems}
        rightMenuItems={header.rightMenuItems}
        onItemClick={ItemClicked} />
    </Header>
  );
};

export default HeaderLayout;
