import React from 'react';
import { useSelector } from 'react-redux';

import Blog from 'domain/romantic/components/Blog';

const BlogLayout = () => {
  const romanticState = useSelector((state: any) => state.romanticState);

  const { blog } = romanticState;

  return <Blog {...blog} />;
};

export default BlogLayout;
