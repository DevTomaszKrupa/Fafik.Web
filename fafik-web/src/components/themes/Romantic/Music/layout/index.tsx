import React, { Fragment } from 'react';

import components from './Music.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const MusicLayout = (props: Props) => {
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
    MusicButton
  } = components;

  const { } = props.romanticState;

  return (
    <Fragment>
      <MusicSection>
        <MusicSectionCircleBox>
          <MusicSectionCircle>
            <MusicCircleFrame>
              <MusicCircleIcon />
            </MusicCircleFrame>
          </MusicSectionCircle>
        </MusicSectionCircleBox>
        <MusicSectionFrame>
          <MusicSectionTitle>
            {' '}
            MASZ SWOJĄ ULUBIONĄ PIOSENKĘ I CHCESZ USŁYSZEĆ JĄ W TRAKCIE
            NASZEGO WESELA?{' '}
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
    </Fragment>
  );
};

export default MusicLayout;
