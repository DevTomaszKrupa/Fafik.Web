import React from 'react';
import moment from 'moment';

import { AdminEditableComponent } from 'application/shared/components';

import components from './styles';

const BlogLayout = props => {
  const {
    SingleLineHorizontal,
    Title,
    Subtitle,
    BlogSection,
    BlogSectionFrame,
    BlogPanel,
    BlogRecentPosts,
    BlogPost,
    BlogPostPhoto,
    BlogPostDate,
    BlogPostTitle,
    ShowMoreButton,
  } = components;

  const { header, subtitle, posts, showMore } = props;

  return (
    <BlogSection id="blog">
      <BlogSectionFrame>
        <BlogPanel>
          <AdminEditableComponent adminMode={true} itemId="blog.header" textValue={header}>
            <Title color="#0E0E06"> {header} </Title>
          </AdminEditableComponent>
          <AdminEditableComponent adminMode={true} itemId="blog.subtitle" textValue={subtitle}>
            <Subtitle color="#0E0E06" padding="0 0 1rem 0">
              {subtitle}
            </Subtitle>
          </AdminEditableComponent>

          <SingleLineHorizontal />

          <BlogRecentPosts>
            {posts.map(post => (
              <BlogPost>
                <BlogPostPhoto backgroundImage={post.image} />
                <BlogPostDate> {moment(post.date).format('DD MM')} </BlogPostDate>
                <BlogPostTitle> {post.header} </BlogPostTitle>
              </BlogPost>
            ))}
          </BlogRecentPosts>

          <ShowMoreButton> {showMore} </ShowMoreButton>
        </BlogPanel>
      </BlogSectionFrame>
    </BlogSection>
  );
};

export default BlogLayout;
