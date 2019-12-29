import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import RomanticUsualHeader from 'domain/romantic/components/Header/Usual';
import AboutUs from 'domain/romantic/components/AboutUs';
import Quote from 'domain/romantic/components/Quote';
import Gallery from 'domain/romantic/components/Gallery';
import Blog from 'domain/romantic/components/Blog';
import Map from 'domain/romantic/components/Map';
import EventPlan from 'domain/romantic/components/EventPlan';
import GiftPreferences from 'domain/romantic/components/GiftPreferences';
import Music from 'domain/romantic/components/Music';
import AdditionalInfo from 'domain/romantic/components/AdditionalInfo';

// import DoubleLine from 'domain/romantic/components/DoubleLine';

const AdminRomanticSiteEditorComponent = () => {
  const romanticThemeEditorState = useSelector(state => state.romanticThemeEditorState);
  const { header, aboutUs, quoteSection, gallery, blog, plan, additionalInfo } = romanticThemeEditorState;

  return (
    <Fragment>
      {!romanticThemeEditorState.isLoading && (
        <RomanticUsualHeader
          headerNames={header.headerNames}
          headerQuote={header.headerQuote}
          weddingDate={header.weddingDate ? '' : 'Tu wpisz waszsą datę'}
          adminMode={true}
          leftMenuItems={header.leftMenuItems}
          rightMenuItems={header.rightMenuItems}
          onItemClick={undefined}
        />
      )}
      {/* <DoubleLine /> */}
      <AboutUs adminMode={true} {...aboutUs} />
      {/* <DoubleLine /> */}
      <Quote adminMode={true} {...quoteSection} />
      {/* <DoubleLine /> */}

      <Gallery adminMode={true} {...gallery} />
      <Blog adminMode={true} {...blog} />
      {/* <DoubleLine /> */}

      <Map adminMode={true} />
      {/* <DoubleLine /> */}
      <EventPlan adminMode={true} {...plan} />
      {/* <DoubleLine /> */}

      <GiftPreferences adminMode={true} />
      {/* <DoubleLine /> */}

      <Music adminMode={true} />
      {/* <DoubleLine /> */}

      <AdditionalInfo adminMode={true} {...additionalInfo} />
    </Fragment>
  );
};

export default AdminRomanticSiteEditorComponent;
