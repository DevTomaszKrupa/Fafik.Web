import React from 'react';

import components from './styles';

const MusicLayout = () => {
  const {
    MusicSection,
    MusicSectionFrame,
    MusicSectionCircleBox,
    MusicSectionCircle,
    MusicCircleFrame,
    MusicCircleIcon,
    MusicSectionTitle,
    MusicInputBox,
    MusicInput,
    MusicSectionInputs,
    MusicSectionButton,
    MusicActionPanel,
    MusicButton,
  } = components;

  return (
    <MusicSection id="playlista">
      <MusicSectionCircleBox>
        <MusicSectionCircle>
          <MusicCircleFrame>
            <MusicCircleIcon />
          </MusicCircleFrame>
        </MusicSectionCircle>
      </MusicSectionCircleBox>
      <MusicSectionFrame>
        <MusicSectionTitle>
          MASZ SWOJĄ ULUBIONĄ PIOSENKĘ I CHCESZ USŁYSZEĆ JĄ W TRAKCIE NASZEGO
          WESELA?
        </MusicSectionTitle>
        <MusicActionPanel>
          <MusicSectionInputs>
            <MusicInputBox>
              IMIĘ I NAZWISKO: <MusicInput />
            </MusicInputBox>
            <MusicInputBox>
              PROPOZYCJA PIOSENKI: <MusicInput />
            </MusicInputBox>
          </MusicSectionInputs>
          <MusicSectionButton>
            <MusicButton> WYŚLIJ </MusicButton>
          </MusicSectionButton>
        </MusicActionPanel>
      </MusicSectionFrame>
    </MusicSection>
  );
};

export default MusicLayout;
