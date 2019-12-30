import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { history } from 'application/helpers';
import { useDocumentTitle } from 'application/shared';
import { useFormInput } from 'application/shared/hooks';
import { FafikDropzone } from 'domain/controls';

import components from './styles';
import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import { adminPaths } from '../consts';

const AdminBlogNewPostComponent = props => {
  useDocumentTitle('Blog - Nowy post');
  const [postContent, setPostContent] = useState('');
  const [postMiniature, setPostMiniature] = useState(undefined);

  const title = useFormInput('');
  const dispatch = useDispatch();

  const createNewPost = () =>
    dispatch({
      type: 'ADMIN_BLOG_CREATE_NEW_POST_STARTED',
      payload: {
        image: postMiniature,
        title: title.value,
        content: postContent,
        siteName: props.match.params.siteName,
      },
    });

  const onFileAdd = file => {
    setPostMiniature(file);
  };

  const {
    AdminMainSection,
    TitleSection,
    TitleRequest,
    TitleInput,
    ButtonSection,
    PublicButtons,
    MainPostEditor,
    EditorSection,
    PostEditor,
  } = components;
  return (
    <Fragment>
      <AdminTitleSection title="Zarządzanie blogiem ► Nowy Post" />
      <AdminMainSection>
        <ButtonSection>
          <AdminButton
            buttonStyle="gray"
            onClick={() => history.push(adminPaths.blog(props.match.params.siteName))}
            buttonText="< Powrót"
          />
          <TitleSection>
            <TitleRequest>TYTUŁ POSTA:</TitleRequest>
            <TitleInput {...title} />
          </TitleSection>
          <PublicButtons>
            <AdminButton buttonStyle="gray" buttonText="Zapisz" onClick={createNewPost} />
            <AdminButton buttonStyle="pink" buttonText="Opublikuj" />
          </PublicButtons>
        </ButtonSection>
        <MainPostEditor>
          <EditorSection>
            <PostEditor editor={ClassicEditor} data={postContent} onChange={(_event, editor) => setPostContent(editor.getData())} />
          </EditorSection>
          <FafikDropzone onSuccessAdd={onFileAdd} />
        </MainPostEditor>
      </AdminMainSection>
    </Fragment>
  );
};

export default AdminBlogNewPostComponent;
