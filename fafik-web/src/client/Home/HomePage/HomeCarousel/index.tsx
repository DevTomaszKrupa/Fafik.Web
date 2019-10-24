import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DOMPurify from 'dompurify';

import components from './styles';
import slides from './slides';

const HomeCarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOnDragStart = (e: any) => e.preventDefault();

  const previousSlideClicked = () => {
    if (currentSlide === 0) return setCurrentSlide(slides.length - 1);
    setCurrentSlide(currentSlide - 1);
  };

  const nextSlideClicked = () => {
    if (currentSlide === slides.length - 1) return setCurrentSlide(0);
    setCurrentSlide(currentSlide + 1);
  };

  const { Carousel, FeatureBox, SingleFeatureTitle, FeatureDescription, PreviousButton, NextButton } = components;

  return (
    <Carousel>
      {/* <PreviousButton onClick={previousSlideClicked} /> */}
      <AliceCarousel mouseDragEnabled buttonsDisabled slideToIndex={currentSlide}>
        {slides.map(slide => (
          <FeatureBox onDragStart={handleOnDragStart}>
            <FontAwesomeIcon icon={slide.icon} size="2x" color="#ffffff" />
            <SingleFeatureTitle>{slide.title}</SingleFeatureTitle>
            <FeatureDescription dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.description) }}></FeatureDescription>
          </FeatureBox>
        ))}
      </AliceCarousel>
      {/* <NextButton onClick={nextSlideClicked} /> */}
    </Carousel>
  );
};
export default HomeCarouselComponent;
