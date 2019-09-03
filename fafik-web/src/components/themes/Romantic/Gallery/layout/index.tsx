import React, { Fragment } from 'react';

import components from './Gallery.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const GalleryLayout = (props: Props) => {
  const {
    Gallery,
    GalleryOpacity,
    GalleryFrame,
    GalleryTitle,
    Subtitle,
    GalleryCategories,
    GalleryCard,
    CategoryName,
    CategoryPhoto,
  } = components;

  const { gallery } = props.romanticState;

  return (
    <Fragment>
      <Gallery galleryImage={gallery.galleryImage}>
        <GalleryOpacity>
          <GalleryFrame>
            <GalleryTitle color="#ffffff"> GALERIA ZDJĘĆ </GalleryTitle>
            <Subtitle color="#ffffff" padding=" 0.5rem 0 3rem 0">
              Drodzy Goście, zachęcamy do obejrzenia naszej galerii zarówno przed, jak i po uroczystości.
            </Subtitle>
            <GalleryCategories>
              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-prep.png")`}
                />
                <CategoryName> Przygotowania </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-wedding.png")`}
                />
                <CategoryName> Ślub i wesele </CategoryName>
              </GalleryCard>

              <GalleryCard>
                <CategoryPhoto
                  backgroundImage={`url("http://localhost/Fafik/gaja-i-stanislaw/gallery-session.png")`}
                />
                <CategoryName> Sesja narzeczeńska </CategoryName>
              </GalleryCard>
            </GalleryCategories>
          </GalleryFrame>
        </GalleryOpacity>
      </Gallery>
    </Fragment>
  );
};

export default GalleryLayout;
