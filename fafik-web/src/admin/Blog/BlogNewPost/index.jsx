import React, { Fragment } from 'react';
import { history } from 'application/helpers';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import components from './styles';
import { useDocumentTitle } from 'application/shared';
import AdminTitleSection from '../../shared/AdminTitleSection';
import AdminButton from '../../shared/AdminButton'
import { faImages } from '@fortawesome/free-solid-svg-icons';

const AdminBlogNewPostComponent = () => {
    useDocumentTitle('Blog - Nowy post');

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
                    <AdminButton buttonStyle='gray' onClick={() => history.push('/admin/blog')} buttonText='< Powrót' />
                    <TitleSection>
                        <TitleRequest>TYTUŁ POSTA:</TitleRequest>
                        <TitleInput />
                    </TitleSection>
                    <PublicButtons>
                        <AdminButton buttonStyle='gray' buttonText='Zapisz' />
                        <AdminButton buttonStyle='pink' buttonText='Opublikuj' />
                    </PublicButtons>
                </ButtonSection>
                <MainPostEditor>
                    <EditorSection>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onInit={(editor) => {
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(_event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(_event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
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
