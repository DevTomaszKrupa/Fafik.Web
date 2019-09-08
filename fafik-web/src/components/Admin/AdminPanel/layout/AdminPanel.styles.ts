import styled from 'styled-components';

export default {

  AdminPanelHeader: styled.div`
  background-color: violet ;
  height: 4rem;
  `,

  AdminMain: styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  `,

  AdminSidePanel: styled.div`
  background-color: pink;
  width: 17%;
  height: 100%;
  padding-top: 1rem;
  `,

  AdminMainPanel: styled.div`
  background-color: lavender ;
  flex-grow: 1;
  height: 100%;
  `,

  SidePanelItem: styled.div`
  background-color: #a2716b;
  height: 3rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  `,

};
