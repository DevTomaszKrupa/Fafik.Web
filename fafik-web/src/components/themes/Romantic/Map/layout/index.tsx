import React, { Fragment } from 'react';

import components from './Map.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const MapLayout = (props: Props) => {
  const {
    MapSection,
    MapCircle,
    MapTitleSubtitle,
    MapTitle,
    MapSubtitle,
    MapTextBox,
    MapButtons,
    MapButton,
    MapPart1,
    MapPart2,
    MapContent,
  } = components;

  const { } = props.romanticState;

  return (
    <Fragment>
      <MapSection>
        <MapContent>
          <MapPart1>
            <MapCircle />
          </MapPart1>

          <MapPart2>
            <MapTextBox>
              <MapTitleSubtitle>
                <MapTitle color="#000000">
                  NIE WIESZ JAK DOJECHAĆ NA MIEJSCE?
              </MapTitle>
                <MapSubtitle>
                  {' '}
                  Kliknij na prostokąt z nazwą miejsca
                <br />i sprawdź lokalizację na mapie!{' '}
                </MapSubtitle>
              </MapTitleSubtitle>
              <MapButtons>
                <MapButton> DOM PANNY MŁODEJ </MapButton>
                <MapButton> KOŚCIÓŁ - ŚLUB </MapButton>
                <MapButton> KARCZMA - WESELE </MapButton>
              </MapButtons>
            </MapTextBox>

          </MapPart2>
        </MapContent>

      </MapSection>
    </Fragment>
  );
};

export default MapLayout;
