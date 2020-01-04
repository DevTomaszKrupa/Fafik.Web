import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faPalette, faPen, faMusic, faUserFriends, faChartBar, faImage, faQrcode, faStar } from '@fortawesome/free-solid-svg-icons';

import { history } from 'application/helpers';

import components from './styles';
import { adminPaths } from '../consts';

const AdminSidePanelComponent = () => {
  const adminPanelState = useSelector(state => state.adminPanelState);
  const { isLoading, site } = adminPanelState;

  const dispatch = useDispatch();
  const openAdminThemeEditor = () => dispatch({ type: 'OPEN_ADMIN_THEME_EDITOR' });

  const OnItemClicked = path => history.push(path);

  const OnConfigurationClicked = () => {
    openAdminThemeEditor();
    history.push(`${adminPaths.config(site.siteName)}`);
  };

  const { SidePanelItem, SidePanelClientBox, ClientBoxNames, WeddingDate, SidePanelPause, SidePanelPremiumItem, FAIcon } = components;

  return (
    <Fragment>
      {isLoading && <span>lołding...</span>}
      {!isLoading && site && (
        <Fragment>
          <SidePanelClientBox>
            <ClientBoxNames>{site.coupleNames}</ClientBoxNames>
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
            onClick={() => OnItemClicked(adminPaths.blog(site.siteName))}
            active={
              history.location.pathname === adminPaths.blog(site.siteName) ||
              history.location.pathname === adminPaths.blogNewPost(site.siteName)
            }
          >
            <FAIcon icon={faPen} />
            Blog
          </SidePanelItem>
          <SidePanelItem
            onClick={() => OnItemClicked(adminPaths.playlist(site.siteName))}
            active={history.location.pathname === adminPaths.playlist(site.siteName)}
          >
            <FAIcon icon={faMusic} />
            Playlista
          </SidePanelItem>
          <SidePanelItem
            onClick={() => OnItemClicked(adminPaths.guestList(site.siteName))}
            active={history.location.pathname === adminPaths.guestList(site.siteName)}
          >
            <FAIcon icon={faUserFriends} />
            Lista gości
          </SidePanelItem>
          <SidePanelItem
            onClick={() => OnItemClicked(adminPaths.stats(site.siteName))}
            active={history.location.pathname === adminPaths.stats(site.siteName)}
          >
            <FAIcon icon={faChartBar} />
            Statystyki
          </SidePanelItem>
          <SidePanelItem
            onClick={() => OnItemClicked(adminPaths.gallery(site.siteName))}
            active={history.location.pathname === adminPaths.gallery(site.siteName)}
          >
            <FAIcon icon={faImage} />
            Galeria
          </SidePanelItem>
          <SidePanelItem
            onClick={() => OnItemClicked(adminPaths.QRcode(site.siteName))}
            active={history.location.pathname === adminPaths.QRcode(site.siteName)}
          >
            <FAIcon icon={faQrcode} />
            Kod QR
          </SidePanelItem>
          <SidePanelPause />
          <SidePanelPremiumItem onClick={() => OnItemClicked(adminPaths.subscription(site.siteName))}>
            <FAIcon icon={faStar} /> Abonament
          </SidePanelPremiumItem>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminSidePanelComponent;
