import React, { Fragment } from 'react';
import components from './styles';
import { history } from 'application/helpers';
import { AdminClient } from 'domain/models';
import { adminPaths } from '../../../consts';
import { useDispatch } from 'react-redux';

type Props = {
  client: AdminClient;
};

const AdminSidePanelClientComponent = (props: Props) => {
  const dispatch = useDispatch();
  const openAdminThemeEditor = () => dispatch({ type: 'OPEN_ADMIN_THEME_EDITOR' });

  const { client } = props;
  const {
    SidePanelItem,
    SidePanelClientBox,
    ClientBoxText,
    ClientBoxTitle,
    ClientBoxNames,
    ClientBoxValidity,
    ValidityRequest,
    ValidityExpDate,
    ClientBoxOptionArrow,
    SidePanelPause,
    SidePanelPremiumItem,
  } = components;

  const OnItemClicked = (path: string) => history.push(path);

  const OnConfigurationClicked = () => {
    openAdminThemeEditor();
    history.push(`${adminPaths.config(client.name)}`);
  };

  return (
    <Fragment>
      <SidePanelClientBox>
        <ClientBoxText>
          <ClientBoxTitle>STRONA:</ClientBoxTitle>
          <ClientBoxNames>{client.name}</ClientBoxNames>
          <ClientBoxValidity>
            <ValidityRequest>ważna do:</ValidityRequest>
            <ValidityExpDate>21.05.2020</ValidityExpDate>
          </ClientBoxValidity>
        </ClientBoxText>
        <ClientBoxOptionArrow />
      </SidePanelClientBox>
      <SidePanelPause />
      <SidePanelItem onClick={OnConfigurationClicked}>Konfiguruj</SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.blog(client.name))}
        active={
          history.location.pathname === adminPaths.blog(client.name) || history.location.pathname === adminPaths.blogNewPost(client.name)
        }
      >
        Blog
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.playlist(client.name))}
        active={history.location.pathname === adminPaths.playlist(client.name)}
      >
        Playlista
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.guestList(client.name))}
        active={history.location.pathname === adminPaths.guestList(client.name)}
      >
        Lista gości
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.stats(client.name))}
        active={history.location.pathname === adminPaths.stats(client.name)}
      >
        Statystyki
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.gallery(client.name))}
        active={history.location.pathname === adminPaths.gallery(client.name)}
      >
        Galeria
      </SidePanelItem>
      <SidePanelPause />
      <SidePanelPremiumItem> Abonament </SidePanelPremiumItem>
    </Fragment>
  );
};

export default AdminSidePanelClientComponent;
