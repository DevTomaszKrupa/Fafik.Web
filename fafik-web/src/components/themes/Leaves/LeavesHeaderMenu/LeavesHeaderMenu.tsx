import React from 'react';
import components from './LeavesHeaderMenu.styles';

type Props = {
    logoNames: string;
};

const LeavesHeaderMenu = (props: Props) => {

    const { Menu, Item, MenuLeft, MenuCenter, MenuRight } = components;
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
    return <Menu>
        <MenuLeft>{leftMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuLeft>
        <MenuCenter>
            {props.logoNames}
        </MenuCenter>
        <MenuRight>{rightMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuRight>
    </Menu>;
};

export { LeavesHeaderMenu };
