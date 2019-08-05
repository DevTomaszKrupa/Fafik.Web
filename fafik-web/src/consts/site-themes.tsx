import React from 'react';
import { Leaves } from '../components/themes/Leaves/layout/Leaves';
import { LeavesAbout } from '../components/themes/Leaves/LeavesAbout/LeavesAbout';
import { LeavesGallery } from '../components/themes/Leaves/LeavesGallery/LeavesGallery';

interface IThemeData {
  component: JSX.Element;
  sites: { [key: string]: JSX.Element };
}

const SiteThemes: { [key: string]: IThemeData } = {
  'leaves': {
    component: <Leaves />,
    sites: {
      undefined: <LeavesAbout />,
      'o-nas': <LeavesAbout />,
      'galeria': <LeavesGallery />
    }
  }
};

export { SiteThemes };
