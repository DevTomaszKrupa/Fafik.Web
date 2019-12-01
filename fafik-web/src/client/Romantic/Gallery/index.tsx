import React from 'react';
import { useSelector } from 'react-redux';

import Gallery from 'domain/romantic/components/Gallery';

const GalleryLayout = () => {
  const romanticState = useSelector((state: any) => state.romanticState);

  const { gallery } = romanticState;

  return <Gallery {...gallery} />;
};

export default GalleryLayout;
