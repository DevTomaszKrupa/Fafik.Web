import React from 'react';
import { useSelector } from 'react-redux';

import EventPlan from 'domain/romantic/components/EventPlan';

const BlogLayout = () => {
  const romanticState = useSelector((state: any) => state.romanticState);

  const { plan } = romanticState;

  return <EventPlan {...plan} />;
};

export default BlogLayout;
