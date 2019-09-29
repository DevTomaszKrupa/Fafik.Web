import React from 'react';

import components from './styles';


const MapLayout = () => {
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

  return (
      <MapSection id="dojazd">
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
                  Kliknij na prostokąt z nazwą miejsca
                <br />i sprawdź lokalizację na mapie!
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
  );
};

export default MapLayout;
