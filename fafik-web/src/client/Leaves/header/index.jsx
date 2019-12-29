import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { IMAGE_STORAGE } from 'application/config';
import { history } from 'application/helpers';
import components from './styles';

const HeaderComponent = () => {
  const leavesState = useSelector(state => state.leavesState);
  const { Header, Images, Image, Menu, Item, MenuLeft, MenuCenter, MenuRight } = components;

  const redirect = path => {
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

export default HeaderComponent;
