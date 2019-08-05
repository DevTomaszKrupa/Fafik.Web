import React from 'react';
import components from './Leaves.styles';
import flower1 from './flower1.png';
import flower2 from './flower2.png';


const Leaves = () => {
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
    return (
        <Header>
            <Images>
                <Image src={flower1} alt="flower"></Image>
                <Image src={flower2} alt="flower"></Image>
            </Images>
            <Menu>
                <MenuLeft>{leftMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuLeft>
                <MenuCenter>
                    Katarzyna i Daniel
                </MenuCenter>
                <MenuRight>{rightMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuRight>
            </Menu>
        </Header>);
};

export { Leaves };
