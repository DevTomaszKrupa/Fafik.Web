import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import EventPlan from 'domain/romantic/components/EventPlan';

const BlogLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { plan } = romanticState;

  return (
    <EventPlan {...plan} />
  );
};

export default BlogLayout;
