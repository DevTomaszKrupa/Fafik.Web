import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../store/reducers';
import Gallery from '../../../../theme/romantic/components/Gallery';

const GalleryLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { gallery } = romanticState;

  return (
    <Gallery {...gallery} />
  );
};

export default GalleryLayout;
