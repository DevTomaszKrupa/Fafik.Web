import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ThemeSelectionMiniature from 'domain/shared/ThemeSelectionMiniature';

import components from './styles';

const ThemesOfferComponent = () => {
  const adminHomeState = useSelector(state => state.adminHomeState);
  const { themes } = adminHomeState;
  const dispatch = useDispatch();

  const onSelectClick = theme => dispatch({ type: 'OPEN_CONFIRM_SELECTION_MODAL', payload: theme });

  const { ThemesContainer } = components;
  return (
    <ThemesContainer>
      {themes.map(theme => (
        <ThemeSelectionMiniature theme={theme} onSelectClickFunction={() => onSelectClick(theme)} />
      ))}
    </ThemesContainer>
  );
};
export default ThemesOfferComponent;
