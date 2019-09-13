import React, { Fragment } from 'react';
import moment from 'moment';

import components from './styles';
import { RomanticBlogProps } from '../../models';


const BlogLayout = (props: RomanticBlogProps) => {
  const {
    SingleLineHorizontal, Title, Subtitle, BlogSection, BlogSectionFrame, BlogPanel, BlogRecentPosts,
    BlogPost, BlogPostPhoto, BlogPostDate, BlogPostTitle, ShowMoreButton } = components;

  const { header, subtitle, posts, showMore } = props;

  return (
    <Fragment>
      <BlogSection>
        <BlogSectionFrame>
          <BlogPanel>
            <Title color="#0E0E06"> {header} </Title>
            <Subtitle color="#0E0E06" padding="0 0 1rem 0"> {subtitle} </Subtitle>
            <SingleLineHorizontal />

            <BlogRecentPosts>

              {posts.map(post =>
                <BlogPost>
                  <BlogPostPhoto backgroundImage={post.image} />
                  <BlogPostDate> {moment(post.date).format('DD MM')} </BlogPostDate>
                  <BlogPostTitle> {post.header} </BlogPostTitle>
                </BlogPost>)}

            </BlogRecentPosts>

            <ShowMoreButton> {showMore} </ShowMoreButton>
          </BlogPanel>
        </BlogSectionFrame>
      </BlogSection>
    </Fragment>
  );
};

export default BlogLayout;
