import React, { Fragment } from 'react';

import components from './Blog.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const BlogLayout = (props: Props) => {
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
    ShowMoreButton
  } = components;

  const { } = props.romanticState;

  return (
    <Fragment>
      <BlogSection>
        <BlogSectionFrame>
          <BlogPanel>
            <Title color="#0E0E06"> NASZ BLOG </Title>
            <Subtitle color="#0E0E06" padding="0 0 1rem 0">
              Są tu nasze wpisy kierowane do Was, naszych najdroższych.
            </Subtitle>
            <SingleLineHorizontal />

            <BlogRecentPosts>
              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1553013983-15241ab69e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>

              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1494319827402-c4b839aed26b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>

              <BlogPost>
                <BlogPostPhoto
                  backgroundImage={`url("https://images.unsplash.com/photo-1535340025009-383e4507e88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`}
                />
                <BlogPostDate> 09.08.2020 </BlogPostDate>
                <BlogPostTitle>
                  Przygotowujemy zaproszenia,
                  <br />
                  zobaczcie!
                </BlogPostTitle>
              </BlogPost>
            </BlogRecentPosts>

            <ShowMoreButton> ZOBACZ WIĘCEJ > </ShowMoreButton>
          </BlogPanel>
        </BlogSectionFrame>
      </BlogSection>
    </Fragment>
  );
};

export default BlogLayout;
