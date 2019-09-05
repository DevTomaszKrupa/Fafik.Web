import React from 'react';

import components from './header.styles';
import { SiteItem } from '../../../../../store/romantic/theme/types';
import { AdminEditableComponent } from '../../../../../shared/components';

type Props = {
  headerNames: string;
  headerQuote: string;
  weddingDate: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  onItemClick: (path: string) => void;
  adminMode?: boolean;
};


const HeaderLayout = (props: Props) => {

  const { Menu, MenuFrame, MenuCenter, SideMenu, Item, CenterNames, CenterDate, SingleLineVertical, SingleLineHorizontal,
    CenterQuote } = components;

  const { headerNames, leftMenuItems, headerQuote, weddingDate, rightMenuItems, onItemClick, adminMode } = props;

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
          <CenterNames>
            <AdminEditableComponent adminMode={adminMode} itemId="RomanticHeaderHeaderNames">{headerNames}</AdminEditableComponent>
          </CenterNames>
          <CenterDate>
            <AdminEditableComponent adminMode={adminMode} itemId="RomanticHeaderWeddingDate">{weddingDate}</AdminEditableComponent>
          </CenterDate>
          <SingleLineHorizontal />
          <CenterQuote>
            <AdminEditableComponent adminMode={adminMode} itemId="RomanticHeaderHeaderQuote">{headerQuote}</AdminEditableComponent>
          </CenterQuote>
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
