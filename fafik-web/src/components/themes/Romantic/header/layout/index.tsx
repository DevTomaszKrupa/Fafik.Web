import React, { Fragment } from 'react';
import moment from 'moment';

import components from './header.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';
import { Action } from '../../../../../store/actions';

type Props = {
  romanticState: RomanticState;
  openRsvpDialog: () => Action;
};

const HeaderLayout = (props: Props) => {
  const {
    Header,
    StickyMenu,
    StickyMenuTopLine,
    StickyMenuIcon,
    StickyMenuIconBox,
    StickyMenuOptions,
    SideStickyMenu,
    StickyCenterNames,
    StickyMenuRight,
    StickyItem,
    Menu,
    MenuFrame,
    MenuCenter,
    SideMenu,
    Item,
    CenterNames,
    CenterDate,
    SingleLineVertical,
    SingleLineHorizontal,
    CenterQuote
  } = components;

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
    <Fragment>
      <Header headerImage={header.mainImage}>
        <StickyMenu>
          <StickyMenuTopLine>
            <StickyMenuIconBox>
              <StickyMenuIcon
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}>
              </StickyMenuIcon>
            </StickyMenuIconBox>
            <StickyCenterNames>{header.headerNames}</StickyCenterNames>
            <StickyMenuRight></StickyMenuRight>
          </StickyMenuTopLine>

          <StickyMenuOptions>
            <SideStickyMenu>
              {header.leftMenuItems.map(x => {
                return <StickyItem onClick={() => ItemClicked(x.path)} textAlign="right"> {x.name} </StickyItem>
              })}
            </SideStickyMenu>

            <SideStickyMenu>
              {header.rightMenuItems.map(x => (
                <StickyItem onClick={() => ItemClicked(x.path)} textAlign="left"> {x ? x.name : ''} </StickyItem>
              ))}
            </SideStickyMenu>
          </StickyMenuOptions>
        </StickyMenu>
        <Menu>
          <MenuFrame>
            <SideMenu>
              {header.leftMenuItems.map(x => (
                <Item onClick={() => ItemClicked(x.path)} textAlign="right"> {x.name} </Item>
              ))}
            </SideMenu>
            <SingleLineVertical />
            <MenuCenter>
              <CenterNames>{header.headerNames}</CenterNames>
              <CenterDate>
                {moment(header.weddingDate).format('DD.MM.YYYY')}
              </CenterDate>
              <SingleLineHorizontal />
              <CenterQuote>{header.headerQuote}</CenterQuote>
            </MenuCenter>
            <SingleLineVertical />
            <SideMenu>
              {header.rightMenuItems.map(x => (
                <Item onClick={() => ItemClicked(x.path)} textAlign="left"> {x ? x.name : ''} </Item>
              ))}
            </SideMenu>
          </MenuFrame>
        </Menu>
      </Header>
    </Fragment>
  );
};

export default HeaderLayout;
