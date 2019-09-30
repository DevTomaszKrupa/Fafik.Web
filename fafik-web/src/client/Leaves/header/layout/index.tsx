import React, { Fragment } from 'react';

import { LeavesState } from 'application/store/leaves/theme/reducers';
import { IMAGE_STORAGE } from 'application/config';
import { history } from 'application/helpers';

import components from './header.styles';

type Props = {
  leavesState: LeavesState;
};

const header = (props: Props) => {
  const { leavesState } = props;
  const { Header, Images, Image, Menu, Item, MenuLeft, MenuCenter, MenuRight } = components;

  const redirect = (path: string) => {
    history.push(`/${leavesState.clientName}/${path}`);
  };

  return (
    <Fragment>
      <Header>
        <Images>
          <Image src={IMAGE_STORAGE + leavesState.headerImageLeft} alt="flower" />
          <Image src={IMAGE_STORAGE + leavesState.headerImageRight} alt="flower" />
        </Images>
        <Menu>
          <MenuLeft>
            {leavesState.leftMenuItems.map(x => (
              <Item onClick={() => redirect(x.path)}> {x.name} </Item>
            ))}
          </MenuLeft>
          <MenuCenter onClick={() => history.push(`/${leavesState.clientName}`)}>{leavesState.headerNames}</MenuCenter>
          <MenuRight>
            {leavesState.rightMenuItems.map(x => (
              <Item onClick={() => redirect(x.path)}> {x.name} </Item>
            ))}
          </MenuRight>
        </Menu>
      </Header>
    </Fragment>
  );
};

export default header;
