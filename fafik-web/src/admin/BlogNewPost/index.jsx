import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import { history } from 'application/helpers';
import { useDocumentTitle } from 'application/shared';
import { useFormInput } from 'application/shared/hooks';

import components from './styles';
import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import { adminPaths } from '../consts';

const AdminBlogNewPostComponent = props => {
  useDocumentTitle('Blog - Nowy post');
  const [postContent, setPostContent] = useState('');
  const title = useFormInput('');
  const dispatch = useDispatch();
  const createNewPost = () =>
    dispatch({
      type: 'ADMIN_BLOG_CREATE_NEW_POST_STARTED',
      payload: { title: title.value, content: postContent, clientName: props.match.params.clientName },
    });

  const {
    AdminMainSection,
    TitleSection,
    TitleRequest,
    TitleInput,
    ButtonSection,
    PublicButtons,
    MainPostEditor,
    EditorSection,
    ImageUploadSection,
    ImageUploadTitle,
    ImageUpload,
  } = components;
  return (
    <Fragment>
      <AdminTitleSection title="Blog - Nowy post" />
      <AdminMainSection>
        <ButtonSection>
          <AdminButton
            buttonStyle="gray"
            onClick={() => history.push(adminPaths.blog(props.match.params.clientName))}
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
            <CKEditor editor={ClassicEditor} data={postContent} onChange={(_event, editor) => setPostContent(editor.getData())} />
          </EditorSection>
          <ImageUploadSection>
            <ImageUploadTitle>WGRAJ MINIATURKĘ POSTA:</ImageUploadTitle>
            <ImageUpload>
              <FontAwesomeIcon icon={faImages} size="3x" color="#253535" />
            </ImageUpload>
          </ImageUploadSection>
        </MainPostEditor>
      </AdminMainSection>
    </Fragment>
  );
};

export default AdminBlogNewPostComponent;
