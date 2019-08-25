import React, { Fragment } from 'react';
import moment from 'moment';

import components from './header.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const HeaderLayout = (props: Props) => {
  const {
    Header,
    StickyMenu,
    StickyMenuOptions,
    SideStickyMenu,
    StickyCenterNames,
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

  const { romanticState } = props;
  const { header } = romanticState;
  return (
    <Fragment>
      <Header headerImage={header.mainImage}>
        <StickyMenu>
          <StickyCenterNames>{header.headerNames}</StickyCenterNames>

          <StickyMenuOptions>
            <SideStickyMenu>
              {header.leftMenuItems.map(x => (
                <StickyItem textAlign="right"> {x.name} </StickyItem>
              ))}
            </SideStickyMenu>

            <SideStickyMenu>
              {header.rightMenuItems.map(x => (
                <StickyItem textAlign="left"> {x ? x.name : ''} </StickyItem>
              ))}
            </SideStickyMenu>
          </StickyMenuOptions>
        </StickyMenu>
        <Menu>
          <MenuFrame>
            <SideMenu>
              {header.leftMenuItems.map(x => (
                <Item textAlign="right"> {x.name} </Item>
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
                <Item textAlign="left"> {x ? x.name : ''} </Item>
              ))}
            </SideMenu>
          </MenuFrame>
        </Menu>
      </Header>
    </Fragment>
  );
};

export default HeaderLayout;
