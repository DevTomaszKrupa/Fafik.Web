import React, { useState } from 'react';

import { IMAGE_STORAGE } from 'application/config';
import { SingleTheme } from '../reducers';
import components from './styles';

type Props = {
  theme: SingleTheme;
  onPreviewClickFunction?: (themeFunctionName: SingleTheme) => void;
  onSelectClickFunction?: (themeFunctionName: SingleTheme) => void;
};

const OfferPageComponent = (props: Props) => {
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
export default OfferPageComponent;
