import React from 'react';
import moment from 'moment';

import components from './header.styles';
import { SiteItem } from '../../../../../store/romantic/theme/types';

type Props = {
  headerNames: string;
  headerQuote: string;
  weddingDate: Date | undefined;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  onItemClick: (path: string) => void;
};


const HeaderLayout = (props: Props) => {

  const { Menu, MenuFrame, MenuCenter, SideMenu, Item, CenterNames, CenterDate, SingleLineVertical, SingleLineHorizontal,
    CenterQuote } = components;

  const { headerNames, leftMenuItems, headerQuote, weddingDate, rightMenuItems, onItemClick } = props;

  return (
    <Menu>
      <MenuFrame>
        <SideMenu>
          {leftMenuItems.map(x => (
            <Item onClick={() => onItemClick(x.path)} textAlign="right"> {x.name} </Item>
          ))}
        </SideMenu>
        <SingleLineVertical />
        <MenuCenter>
          <CenterNames>{headerNames}</CenterNames>
          <CenterDate>
            {moment(weddingDate).format('DD.MM.YYYY')}
          </CenterDate>
          <SingleLineHorizontal />
          <CenterQuote>{headerQuote}</CenterQuote>
        </MenuCenter>
        <SingleLineVertical />
        <SideMenu>
          {rightMenuItems.map(x => (
            <Item onClick={() => onItemClick(x.path)} textAlign="left"> {x.name} </Item>
          ))}
        </SideMenu>
      </MenuFrame>
    </Menu>
  );
};

export default HeaderLayout;
