import React from 'react';

import components from './RomanticSiteEditor';


const AdminRomanticSiteEditorComponent = () => {

    const { MainContainer, SitePanel, Editor } = components;
    return (
        <MainContainer>
            <SitePanel>
                Romantic theme editor
            </SitePanel>
            <Editor>

            </Editor>
        </MainContainer>);
};

export default AdminRomanticSiteEditorComponent;
