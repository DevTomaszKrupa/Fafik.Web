import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IMAGE_STORAGE } from 'application/config';
import components from './styles';

const OfferPageComponent = props => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const onPreviewClickHandled = () => {
    if (props.onPreviewClickFunction) props.onPreviewClickFunction(props.theme);
  };

  const onSelectClickHandled = () => {
    if (props.onSelectClickFunction) props.onSelectClickFunction(props.theme);
  };

  const { ThemeElement, ThemeBox, ThemeImage, ThemeTop, TopButtons, DemoButton, ThemeText, ThemeName, ThemeDescription } = components;

  return (
    <ThemeElement>
      <ThemeBox onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
        <ThemeImage isMouseOn={isMouseOn} src={IMAGE_STORAGE + props.theme.themeImageUrl} />
        <ThemeTop>
          {isMouseOn && (
            <TopButtons>
              <DemoButton onClick={onPreviewClickHandled}>PODGLĄD</DemoButton>
              {props.onSelectClickFunction && <DemoButton onClick={onSelectClickHandled}> WYBIERZ</DemoButton>}
            </TopButtons>
          )}
        </ThemeTop>
      </ThemeBox>
      <ThemeText>
        <ThemeName>{props.theme.themeName}</ThemeName>
        <ThemeDescription>{props.theme.themeDescription}</ThemeDescription>
      </ThemeText>
    </ThemeElement>
  );
};

OfferPageComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  onPreviewClickFunction: PropTypes.func,
  onSelectClickFunction: PropTypes.func,
};

OfferPageComponent.defaultProps = {
  onPreviewClickFunction: undefined,
  onSelectClickFunction: undefined,
};

export default OfferPageComponent;
