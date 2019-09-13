import React, { Fragment } from 'react';

import components from './styles';
import { RomanticGalleryProps } from '../../models';


const GalleryLayout = (props: RomanticGalleryProps) => {
  const { Gallery, GalleryOpacity, GalleryFrame, GalleryTitle, Subtitle, GalleryCategories,
    GalleryCard, CategoryName, CategoryPhoto, } = components;

  const { galleryImage, galleryDescription, galleryHeader, cards } = props;

  return (
    <Fragment>
      <Gallery galleryImage={galleryImage}>
        <GalleryOpacity>
          <GalleryFrame>
            <GalleryTitle color="#ffffff"> {galleryHeader} </GalleryTitle>
            <Subtitle color="#ffffff" padding=" 0.5rem 0 3rem 0">
              {galleryDescription}
            </Subtitle>
            <GalleryCategories>
              {cards.map(card =>
                <GalleryCard key={card.title}>
                  <CategoryPhoto backgroundImage={card.image} />
                  <CategoryName> {card.title} </CategoryName>
                </GalleryCard>)}
            </GalleryCategories>
          </GalleryFrame>
        </GalleryOpacity>
      </Gallery>
    </Fragment>
  );
};

export default GalleryLayout;
