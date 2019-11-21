import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import components from './styles';
import RomanticUsualHeader from 'domain/romantic/components/Header/Usual';
import { AppState } from 'application/store/reducers';

type Props = {
  clientName: string;
};

const AdminRomanticSiteEditorComponent = (props: Props) => {
  const dispatch = useDispatch();
  const adminRomanticThemeEditorState = useSelector((state: AppState) => state.adminRomanticThemeEditorState);
  const { header } = adminRomanticThemeEditorState;

  useEffect(() => {
    dispatch({
      type: 'ROMANTIC_THEME_EDITOR_GET_THEME_STARTED',
      payload: { clientName: props.clientName, sitePath: 'home' },
    });
  }, [props.clientName]);

  const { MainContainer, Editor } = components;
  return (
    <MainContainer>
      <Editor>
        {!adminRomanticThemeEditorState.isLoading && (
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
