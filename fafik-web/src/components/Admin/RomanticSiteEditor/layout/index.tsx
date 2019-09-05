import React from 'react';

import components from './RomanticSiteEditor';
import RomanticUsualHeader from '../../../themes/Romantic/Header/Usual';


const AdminRomanticSiteEditorComponent = () => {

    const { MainContainer, SitePanel, Editor } = components;
    return (
        <MainContainer>
            <SitePanel>
                Romantic theme editor
            </SitePanel>
            <Editor>
                <RomanticUsualHeader
                    headerNames="Tutaj wpisz swoje imiona"
                    headerQuote="Tutaj wpisz swój cytat"
                    weddingDate="Tutaj wpisz swoją datę"
                    adminMode={true}
                    leftMenuItems={[
                        { name: 'O NAS', path: 'o-nas' },
                        { name: 'GALERIA', path: 'galeria' },
                        { name: 'BLOG', path: 'blog' },
                        { name: 'RSVP', path: 'rsvp' }
                    ]}
                    rightMenuItems={[
                        { name: 'DOJAZD', path: 'dojazd' },
                        { name: 'PLAN WYDARZENIA', path: 'plan-wydarzenia' },
                        { name: 'PLAYLISTA', path: 'playlista' },
                        { name: 'INFO DODATKOWE', path: 'info-dodatkowe' }]}
                    onItemClick={() => { }} />
            </Editor>
        </MainContainer>);
};

export default AdminRomanticSiteEditorComponent;
