import React, { Fragment } from 'react';
import components from './styles';
import { history } from 'application/helpers';
import { adminPaths } from '../../consts';
import { useDispatch } from 'react-redux';
import { faPalette, faPen, faMusic, faUserFriends, faChartBar, faImage, faQrcode, faStar } from '@fortawesome/free-solid-svg-icons';

const AdminSidePanelClientComponent = props => {
  const dispatch = useDispatch();
  const openAdminThemeEditor = () => dispatch({ type: 'OPEN_ADMIN_THEME_EDITOR' });

  const { client } = props;
  const { SidePanelItem, SidePanelClientBox, ClientBoxNames, WeddingDate, SidePanelPause, SidePanelPremiumItem, FAIcon } = components;

  const OnItemClicked = path => history.push(path);

  const OnConfigurationClicked = () => {
    openAdminThemeEditor();
    history.push(`${adminPaths.config(client.clientName)}`);
  };

  return (
    <Fragment>
      <SidePanelClientBox>
        <ClientBoxNames>{client.coupleNames}</ClientBoxNames>
        <WeddingDate>
          Wasz wielki dzień już
          <br />
          za 331 dni!
        </WeddingDate>
      </SidePanelClientBox>
      <SidePanelPause />
      <SidePanelItem onClick={OnConfigurationClicked}>
        <FAIcon icon={faPalette} />
        Konfiguruj
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.blog(client.clientName))}
        active={
          history.location.pathname === adminPaths.blog(client.clientName) ||
          history.location.pathname === adminPaths.blogNewPost(client.clientName)
        }
      >
        <FAIcon icon={faPen} />
        Blog
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.playlist(client.clientName))}
        active={history.location.pathname === adminPaths.playlist(client.clientName)}
      >
        <FAIcon icon={faMusic} />
        Playlista
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.guestList(client.clientName))}
        active={history.location.pathname === adminPaths.guestList(client.clientName)}
      >
        <FAIcon icon={faUserFriends} />
        Lista gości
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.stats(client.clientName))}
        active={history.location.pathname === adminPaths.stats(client.clientName)}
      >
        <FAIcon icon={faChartBar} />
        Statystyki
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.gallery(client.clientName))}
        active={history.location.pathname === adminPaths.gallery(client.clientName)}
      >
        <FAIcon icon={faImage} />
        Galeria
      </SidePanelItem>
      <SidePanelItem
        onClick={() => OnItemClicked(adminPaths.QRcode(client.clientName))}
        active={history.location.pathname === adminPaths.QRcode(client.clientName)}
      >
        <FAIcon icon={faQrcode} />
        Kod QR
      </SidePanelItem>
      <SidePanelPause />
      <SidePanelPremiumItem>
        <FAIcon icon={faStar} />
      </SidePanelPremiumItem>
    </Fragment>
  );
};

export default AdminSidePanelClientComponent;
