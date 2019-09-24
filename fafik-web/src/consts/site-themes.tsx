import React from 'react';
import Leaves from '../components/themes/Leaves';
import RomanticLayout from '../components/themes/Romantic';

const SiteThemes: { [key: string]: JSX.Element } = {
  1: <RomanticLayout />,
  2: <Leaves />
};

export { SiteThemes };
