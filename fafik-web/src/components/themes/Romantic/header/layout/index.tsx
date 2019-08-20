import React, { Fragment } from "react";

import components from "./header.styles";
import { RomanticState } from "../../../../../store/romantic/theme/reducers";

type Props = {
  romanticState: RomanticState;
};

const Header = (props: Props) => {
  console.log(props);
  const {
    Header,
    StickyMenu,
    SideStickyMenu,
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

  const leftMenuItems = [
    { name: "O nas" },
    { name: "Galeria" },
    { name: "Blog" }
  ];
  const rightMenuItems = [
    { name: "Dojazd" },
    { name: "Plan wydarzenia" },
    { name: "RSVP" }
  ];
  return (
    <Fragment>
      <Header>
        <StickyMenu>
          <SideStickyMenu>
            {leftMenuItems.map(x => (
              <Item textAlign="right"> {x.name} </Item>
            ))}
          </SideStickyMenu>

          <CenterNames>{props.romanticState.headerNames}</CenterNames>

          <SideStickyMenu>
            {rightMenuItems.map(x => (
              <Item textAlign="left"> {x ? x.name : ""} </Item>
            ))}
          </SideStickyMenu>
        </StickyMenu>
        <Menu>
          <MenuFrame>
            <SideMenu>
              {leftMenuItems.map(x => (
                <Item textAlign="right"> {x.name} </Item>
              ))}
            </SideMenu>
            <SingleLineVertical />
            <MenuCenter>
              <CenterNames>Gaja i Stanisław</CenterNames>
              <CenterDate> 09.06.2021 </CenterDate>
              <SingleLineHorizontal />
              <CenterQuote>
                "Kocha się za nic. <br /> Nie istnieje żaden powód do miłości."
              </CenterQuote>
            </MenuCenter>
            <SingleLineVertical />
            <SideMenu>
              {rightMenuItems.map(x => (
                <Item textAlign="left"> {x ? x.name : ""} </Item>
              ))}
            </SideMenu>
          </MenuFrame>
        </Menu>
      </Header>
    </Fragment>
  );
};

export default Header;
