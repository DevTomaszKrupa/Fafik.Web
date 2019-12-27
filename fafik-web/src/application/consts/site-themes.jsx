import React from 'react';

import LeavesLayout from 'client/Leaves';
import RomanticLayout from 'client/Romantic';

const SiteThemes = {
  1: <RomanticLayout />,
  2: <LeavesLayout />,
};

export { SiteThemes };
