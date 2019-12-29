import React, { Fragment } from 'react';

import components from './styles';

const GiftPreferencesLayout = () => {
  const { GiftSection, GiftSectionFrame, GiftSectionHeader, GiftRebus, GiftRebuses } = components;

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
