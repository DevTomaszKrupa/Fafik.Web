import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../store/reducers';
import Blog from '../../../../theme/romantic/components/Blog';

const BlogLayout = () => {

  const romanticState = useSelector((state: AppState) => state.romanticState);

  const { blog } = romanticState;

  return (
    <Blog {...blog} />
  );
};

export default BlogLayout;
