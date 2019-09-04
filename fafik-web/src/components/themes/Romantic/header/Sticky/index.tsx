import React from 'react';

import components from './header.styles';
import { SiteItem } from '../../../../../store/romantic/theme/types';

type Props = {
  headerNames: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  onItemClick: (path: string) => void;
};

const StickyHeaderLayout = (props: Props) => {
  const { StickyMenu, StickyMenuTopLine, StickyMenuIcon, StickyMenuIconBox, StickyMenuOptions,
    SideStickyMenu, StickyCenterNames, StickyMenuRight, StickyItem } = components;

    const { headerNames, leftMenuItems, rightMenuItems, onItemClick } = props;

  return (
    <StickyMenu>
      <StickyMenuTopLine>
        <StickyMenuIconBox>
          <StickyMenuIcon
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}>
          </StickyMenuIcon>
        </StickyMenuIconBox>
        <StickyCenterNames>{headerNames}</StickyCenterNames>
        <StickyMenuRight></StickyMenuRight>
      </StickyMenuTopLine>

      <StickyMenuOptions>
        <SideStickyMenu>
          {leftMenuItems.map(x => {
            return <StickyItem onClick={() => onItemClick(x.path)} textAlign="right"> {x.name} </StickyItem>;
          })}
        </SideStickyMenu>

        <SideStickyMenu>
          {rightMenuItems.map(x => {
            return <StickyItem onClick={() => onItemClick(x.path)} textAlign="left"> {x.name} </StickyItem>;
          })}
        </SideStickyMenu>
      </StickyMenuOptions>
    </StickyMenu>
  );
};

export default StickyHeaderLayout;
