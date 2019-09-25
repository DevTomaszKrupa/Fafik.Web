import React, { Fragment } from 'react';
import { Route } from 'react-router';

import HomePage from './HomePage';
import FAQPage from './FAQPage';
import ContactPage from './ContactPage';
import OfferPage from './OfferPage';
import PricingPage from './PricingPage';


const HomeComponent = () => {

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/oferta" component={OfferPage} />
      <Route exact path="/cennik" component={PricingPage} />
      <Route exact path="/FAQ" component={FAQPage} />
      <Route exact path="/kontakt" component={ContactPage} />
    </Fragment>
  );
};
export default HomeComponent;
