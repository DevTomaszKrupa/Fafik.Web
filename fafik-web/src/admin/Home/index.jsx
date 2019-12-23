import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useDocumentTitle } from 'application/shared';

import AdminTitleSection from '../shared/AdminTitleSection';
import components from './styles';
import ThemesOfferComponent from './ThemesOffer';
import SelectedThemeComponent from './SelectedTheme';
import ConfirmSelectionModal from './ConfirmSelectionModal';

const AdminHomeComponent = () => {
  useDocumentTitle('Moje strony');

  const adminPanelState = useSelector(state => state.adminPanelState);
  const { isLoading, client } = adminPanelState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!client) dispatch({ type: 'GET_THEMES_STARTED' });
  }, [dispatch, client]);

  const onAfterClose = () => dispatch({ type: 'API_ADMIN_GET_SITE_STARTED' });

  const { WelcomeText, AdminHome } = components;

  return (
    <Fragment>
      <AdminTitleSection title="Witajcie w panelu administratora!"></AdminTitleSection>
      <AdminHome>
        <WelcomeText>
          Cieszymy się, że jesteście. Dziękujemy za wybranie naszego portalu. <br />
          Poniżej znajduje się szablon strony, który wybraliście. Na tym etapie oraz później <br />
          (w zakładce "Ustawienia" w "Profil" w prawym górnym rogu) możecie zmienić ten wybór. <br />
          Aby przejść do etapu edytowania, należy opłacić abonament, wybierając okres ważności. <br />
        </WelcomeText>

        {isLoading && <div>loading</div>}
        {!isLoading && client && <SelectedThemeComponent />}
        {!isLoading && !client && <ThemesOfferComponent />}

        <ConfirmSelectionModal onAfterClose={onAfterClose} />
      </AdminHome>
    </Fragment>
  );
};

export default AdminHomeComponent;
