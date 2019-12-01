import React from 'react';

import components from './styles';

const AdminLoadingSpinner = () => {
  const { Heart, HeartDiv } = components;
  return (
    <Heart>
      <HeartDiv />
    </Heart>
  );
};

export default AdminLoadingSpinner;
