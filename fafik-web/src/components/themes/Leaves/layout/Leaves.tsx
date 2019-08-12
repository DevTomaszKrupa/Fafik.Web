import React, { useEffect } from 'react';
import components from './Leaves.styles';
import { LeavesState } from '../../../../store/leaves/reducers';
import { Action } from '../../../../store/actions';

type Props = {
  leavesState: LeavesState;
  getLeavesTheme: (clientPath: string) => Action
};

const LeavesLayout = (props: Props) => {
  const { leavesState, getLeavesTheme } = props;

  const { Header, Images, Image, Menu, Item, MenuLeft, MenuCenter, MenuRight } = components;
  const leftMenuItems = [
    { name: 'O nas' },
    { name: 'galeria' },
    { name: 'blog' }
  ];
  const rightMenuItems = [
    { name: 'plan dnia' },
    { name: 'mapy' },
    { name: 'RSVP' }
  ];

  useEffect(() => {
    getLeavesTheme(leavesState.clientPath);
}, [leavesState.clientPath]);

  return (
    <Header>
      <Images>
        <Image
          src={process.env.PUBLIC_URL + leavesState.headerRightImage}
          alt="flower"
        />
        <Image
          src={process.env.PUBLIC_URL + leavesState.headerLeftImage}
          alt="flower"
        />
      </Images>
      <Menu>
        <MenuLeft>{leftMenuItems.map(x => (<Item> {x ? x.name : ''} </Item>))}</MenuLeft>
        <MenuCenter>{leavesState.headerNames}</MenuCenter>
        <MenuRight>
          {rightMenuItems.map(x => (
            <Item> {x ? x.name : ''} </Item>
          ))}
        </MenuRight>
      </Menu>
    </Header>
  );
};

export default LeavesLayout;
