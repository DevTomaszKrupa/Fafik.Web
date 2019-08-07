import React from 'react';
import components from './Leaves.styles';
import { ClientState } from '../../../../store/client/reducers';


type Props = {
  clientState: ClientState;
};

const LeavesLayout = (props: Props) => {
    const { clientState } = props;
    const { themeData } = clientState;

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
                <Image src={process.env.PUBLIC_URL + themeData.headerRightImage}  alt="flower"></Image>
                <Image src={process.env.PUBLIC_URL + themeData.headerLeftImage}  alt="flower"></Image>
            </Images>
            <Menu>
                <MenuLeft>{leftMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuLeft>
                <MenuCenter>
                    {themeData.logoNames}
                </MenuCenter>
                <MenuRight>{rightMenuItems.map(x => <Item> {x ? x.name : ''} </Item>)}</MenuRight>
            </Menu>
        </Header>);
};

export default LeavesLayout;
