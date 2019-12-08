import React from 'react';

import components from './header.styles';
import { SiteItem } from 'application/store/romantic/theme/types';
import { AdminEditableComponent } from 'application/shared/components';

type Props = {
  headerNames: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  onItemClick: (path: string) => void;
  adminMode?: boolean;
};

const StickyHeaderLayout = (props: Props) => {
  const {
    StickyMenu,
    StickyMenuTopLine,
    StickyMenuIcon,
    StickyMenuIconBox,
    StickyMenuOptions,
    SideStickyMenu,
    StickyCenterNames,
    StickyMenuRight,
    StickyItem,
  } = components;

  const { headerNames, leftMenuItems, rightMenuItems, onItemClick, adminMode } = props;

  return (
    <StickyMenu>
      <StickyMenuTopLine>
        <StickyMenuIconBox>
          <StickyMenuIcon // TODO
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}
          ></StickyMenuIcon>
        </StickyMenuIconBox>
        <StickyCenterNames>
          <AdminEditableComponent adminMode={adminMode} itemId="header.headerNames" textValue={headerNames}>
            {headerNames}
          </AdminEditableComponent>
        </StickyCenterNames>
        <StickyMenuRight></StickyMenuRight>
      </StickyMenuTopLine>

      <StickyMenuOptions>
        <SideStickyMenu>
          {leftMenuItems.map(x => {
            return (
              <StickyItem key={x.path} onClick={() => onItemClick(x.path)} textAlign="right">
                {' '}
                {x.name}{' '}
              </StickyItem>
            );
          })}
        </SideStickyMenu>

        <SideStickyMenu>
          {rightMenuItems.map(x => {
            return (
              <StickyItem key={x.path} onClick={() => onItemClick(x.path)} textAlign="left">
                {' '}
                {x.name}{' '}
              </StickyItem>
            );
          })}
        </SideStickyMenu>
      </StickyMenuOptions>
    </StickyMenu>
  );
};

export default StickyHeaderLayout;
