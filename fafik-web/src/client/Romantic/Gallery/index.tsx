import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import Gallery from 'domain/romantic/components/Gallery';

const GalleryLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { gallery } = romanticState;

  return (
    <Gallery {...gallery} />
  );
};

export default GalleryLayout;
