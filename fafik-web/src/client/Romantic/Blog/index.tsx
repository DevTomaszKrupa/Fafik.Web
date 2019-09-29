import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from 'application/store/reducers';
import Blog from 'domain/romantic/components/Blog';

const BlogLayout = () => {
  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { blog } = romanticState;

  return <Blog {...blog} />;
};

export default BlogLayout;
