import React, { Fragment } from 'react';

import components from './GiftPreferences.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const GiftPreferencesLayout = (props: Props) => {
  const {
    GiftSection,
    GiftSectionFrame,
    GiftSectionHeader,
    GiftRebus,
    GiftRebuses,
  } = components;


  const { } = props.romanticState;

  return (
    <Fragment>
      <GiftSection>
        <GiftSectionFrame>
          <GiftSectionHeader> Preferencje prezentowe </GiftSectionHeader>
          <GiftRebuses>
            <GiftRebus />
            <GiftRebus />
          </GiftRebuses>
        </GiftSectionFrame>
      </GiftSection>
    </Fragment>
  );
};

export default GiftPreferencesLayout;
