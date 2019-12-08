import React from 'react';
import PropTypes from 'prop-types';

import { AdminEditableComponent } from 'application/shared/components';

import components from './styles';

const HeaderLayout = props => {
  const {
    Menu,
    MenuFrame,
    MenuCenter,
    SideMenu,
    Item,
    CenterNames,
    CenterDate,
    SingleLineVertical,
    SingleLineHorizontal,
    CenterQuote,
  } = components;

  const { headerNames, leftMenuItems, headerQuote, weddingDate, rightMenuItems, onItemClick, adminMode } = props;

  const handleOnItemClick = path => {
    if (onItemClick) onItemClick(path);
  };

  return (
    <Menu>
      <MenuFrame>
        <SideMenu>
          {leftMenuItems.map(x => (
            <Item key={`side-menu-left-item-${x.path}`} onClick={() => handleOnItemClick(x.path)} textAlign="right">
              {x.name}
            </Item>
          ))}
        </SideMenu>
        <SingleLineVertical />
        <MenuCenter>
          <CenterNames>
            <AdminEditableComponent adminMode={adminMode} itemId="header.headerNames" textValue={headerNames}>
              {headerNames}
            </AdminEditableComponent>
          </CenterNames>
          <CenterDate>
            <AdminEditableComponent adminMode={adminMode} itemId="header.weddingDate" textValue={weddingDate}>
              {weddingDate}
            </AdminEditableComponent>
          </CenterDate>
          <SingleLineHorizontal />
          <CenterQuote>
            <AdminEditableComponent adminMode={adminMode} itemId="header.headerQuote" textValue={headerQuote}>
              {headerQuote}
            </AdminEditableComponent>
          </CenterQuote>
        </MenuCenter>
        <SingleLineVertical />
        <SideMenu>
          {rightMenuItems.map(x => (
            <Item key={`side-menu-right-item-${x.path}`} onClick={() => handleOnItemClick(x.path)} textAlign="left">
              {x.name}
            </Item>
          ))}
        </SideMenu>
      </MenuFrame>
    </Menu>
  );
};

HeaderLayout.propTypes = {
  headerNames: PropTypes.string.isRequired,
  headerQuote: PropTypes.string.isRequired,
  weddingDate: PropTypes.string.isRequired,
  leftMenuItems: PropTypes.array.isRequired,
  rightMenuItems: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  adminMode: PropTypes.bool,
};

HeaderLayout.defaultProps = {
  onItemClick: undefined,
  adminMode: false,
};

export default HeaderLayout;
