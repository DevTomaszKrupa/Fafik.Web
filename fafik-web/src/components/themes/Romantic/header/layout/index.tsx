import React, { Fragment } from "react";
import moment from "moment";

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

  // const leftMenuItems = [
  //   { name: "O nas" },
  //   { name: "Galeria" },
  //   { name: "Blog" }
  // ];
  // const rightMenuItems = [
  //   { name: "Dojazd" },
  //   { name: "Plan wydarzenia" },
  //   { name: "RSVP" }
  // ];


  return (
    <Fragment>
      <Header headerImage={props.romanticState.mainImage}>
        <StickyMenu>
          <StickyCenterNames>
            {props.romanticState.headerNames}
          </StickyCenterNames>

          <StickyMenuOptions>
            <SideStickyMenu>
              {props.romanticState.leftMenuItems.map(x => (
                <StickyItem textAlign="right"> {x.name} </StickyItem>
              ))}
            </SideStickyMenu>

            <SideStickyMenu>
              {props.romanticState.rightMenuItems.map(x => (
                <StickyItem textAlign="left"> {x ? x.name : ""} </StickyItem>
              ))}
            </SideStickyMenu>
          </StickyMenuOptions>
        </StickyMenu>
        <Menu>
          <MenuFrame>
            <SideMenu>
              {props.romanticState.leftMenuItems.map(x => (
                <Item textAlign="right"> {x.name} </Item>
              ))}
            </SideMenu>
            <SingleLineVertical />
            <MenuCenter>
              <CenterNames>{props.romanticState.headerNames}</CenterNames>
              <CenterDate>
                {" "}
                {moment(props.romanticState.weddingDate).format(
                  "DD.MM.YYYY"
                )}{" "}
              </CenterDate>
              <SingleLineHorizontal />
              <CenterQuote>{props.romanticState.headerQuote}</CenterQuote>
            </MenuCenter>
            <SingleLineVertical />
            <SideMenu>
              {props.romanticState.rightMenuItems.map(x => (
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
