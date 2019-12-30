import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { history } from 'application/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useDocumentTitle, useFormInput } from 'application/shared';

import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import AdminLoadingSpinner from '../shared/AdminLoadingSpinner';
import components from './styles';
import { adminPaths } from '../consts';

const AdminBlogComponent = props => {
  useDocumentTitle('Blog');
  const dispatch = useDispatch();
  const adminBlogState = useSelector(state => state.adminBlogState);
  const searchPhraseInput = useFormInput('');
  const { posts, isLoading, isAllChecked } = adminBlogState;
  useEffect(() => {
    dispatch({
      type: 'ADMIN_BLOG_GET_POSTS_STARTED',
      payload: { searchPhrase: '', siteName: props.match.params.siteName, limit: 5, offset: 0 },
    });
  }, [props.match.params.siteName, dispatch]);

  const [clock, setClock] = useState();
  const doSearch = evt => {
    const searchText = evt.target.value; // this is the search text
    if (clock) setClock(undefined);
    setClock(
      setTimeout(() => {
        console.log(searchText);
      }, 1000)
    );
  };

  const CheckAll = event => {
    dispatch({ type: 'ADMIN_BLOG_CHANGE_ALL_POSTS_CHECK', payload: event.target.checked });
  };

  const CheckSingle = post => {
    dispatch({ type: 'ADMIN_BLOG_CHANGE_SINGLE_POST_CHECK', payload: post.postId });
  };

  const OnNewPostClick = () => history.push(adminPaths.blogNewPost(props.match.params.siteName));

  const {
    BlogContent,
    AdminCheckbox,
    Checkbox,
    CheckboxPosts,
    AdminEditButtonsInputs,
    ButtonsPart1,
    ButtonsPart2,
    SearchBox,
    SearchInput,
    SearchButton,
    BlogPostSection,
    TableCheckbox,
    TableInfoBox,
    DateTitleBox,
    PostDate,
    PostTitle,
    OptionBox,
  } = components;
  return (
    <div>
      <AdminTitleSection title="Zarządzanie blogiem" />
      <BlogContent>
        <AdminEditButtonsInputs>
          <ButtonsPart1>
            <AdminCheckbox>
              <Checkbox type="checkbox" checked={isAllChecked} onClick={CheckAll} />
            </AdminCheckbox>
            <AdminButton buttonStyle="gray" buttonText="Opublikuj" />
            <AdminButton buttonStyle="gray" buttonText="Usuń" />
          </ButtonsPart1>
          <ButtonsPart2>
            <AdminButton buttonStyle="pink" buttonText="Nowy post" onClick={OnNewPostClick} />
            <SearchBox>
              <SearchInput {...searchPhraseInput} onKeyDown={doSearch} />
              <SearchButton>
                <FontAwesomeIcon icon={faSearch} size="lg" color="#000000" />
              </SearchButton>
            </SearchBox>
          </ButtonsPart2>
        </AdminEditButtonsInputs>
        {isLoading && <AdminLoadingSpinner />}
        {!isLoading &&
          posts.map(post => (
            <BlogPostSection key={`blog-post-${post.postId}`} onClick={() => CheckSingle(post)}>
              <TableCheckbox>
                <CheckboxPosts type="checkbox" checked={post.isChecked} />
              </TableCheckbox>
              <TableInfoBox>
                <DateTitleBox>
                  <PostDate>{moment(post.date).format('DD.MM.YYYY')}</PostDate>
                  <PostTitle>{post.title}</PostTitle>
                </DateTitleBox>
                <OptionBox>WYŚWIETL | EDYTUJ | USUŃ</OptionBox>
              </TableInfoBox>
            </BlogPostSection>
          ))}
      </BlogContent>
    </div>
  );
};

export default AdminBlogComponent;
