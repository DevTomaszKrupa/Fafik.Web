import React from 'react';
import { useSelector } from 'react-redux';

import components from './styles';
import RomanticUsualHeader from 'domain/romantic/components/Header/Usual';

const AdminRomanticSiteEditorComponent = () => {
  const romanticThemeEditorState = useSelector(state => state.romanticThemeEditorState);
  const { header } = romanticThemeEditorState;

  const { MainContainer, Editor } = components;
  return (
    <MainContainer>
      <Editor>
        {!romanticThemeEditorState.isLoading && (
          <RomanticUsualHeader
            headerNames={header.headerNames}
            headerQuote={header.headerQuote}
            weddingDate={header.weddingDate ? '' : 'Tu wpisz waszą datę'}
            adminMode={true}
            leftMenuItems={header.leftMenuItems}
            rightMenuItems={header.rightMenuItems}
            onItemClick={undefined}
          />
        )}
      </Editor>
    </MainContainer>
  );
};

export default AdminRomanticSiteEditorComponent;
