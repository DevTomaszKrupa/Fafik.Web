import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import components from './styles';
import RomanticUsualHeader from 'domain/romantic/components/Header/Usual';
import { AppState } from 'application/store/reducers';

type Props = {
  clientPath: string;
};

const AdminRomanticSiteEditorComponent = (props: Props) => {
  const dispatch = useDispatch();
  const getThemeData = () =>
    dispatch({
      type: 'ROMANTIC_THEME_EDITOR_GET_THEME_STARTED',
      payload: { clientPath: props.clientPath, sitePath: 'home' },
    });
  const adminRomanticThemeEditorState = useSelector(
    (state: AppState) => state.adminRomanticThemeEditorState
  );
  const { header } = adminRomanticThemeEditorState;

  useEffect(() => {
    getThemeData();
  }, []);

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
            onItemClick={() => {}}
          />
        )}
      </Editor>
    </MainContainer>
  );
};

export default AdminRomanticSiteEditorComponent;
