import React from 'react';
import Leaves from 'client/Leaves';
import RomanticLayout from 'client/Romantic';

const SiteThemes: { [key: string]: JSX.Element } = {
  1: <RomanticLayout />,
  2: <Leaves />,
};

export { SiteThemes };
