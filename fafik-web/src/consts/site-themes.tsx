import React from 'react';
import Leaves from '../components/themes/Leaves';
import { RomanticLayout } from '../components/themes/Romantic/layout/Romantic';

const SiteThemes: { [key: string]: JSX.Element } = {
  'leaves': <Leaves />,
  'romantic': <RomanticLayout />
};

export { SiteThemes };
