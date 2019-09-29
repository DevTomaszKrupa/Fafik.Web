import styled from 'styled-components';

export default {
  AdminMain: styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  `,

  AdminSidePanel: styled.div`
  background-color: #FDFBFD;
  width: 18%;
  height: 100%;
  border: 0.1rem solid #CBC3B6;
  font-family: 'Josefin Sans';
  letter-spacing: 0.1rem;
  `,

  AdminMainPanel: styled.div`
  background-color: #ffffff ;
  flex-grow: 1;
  height: 100%;
  `,

  SidePanelItem: styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: #000000;
  text-transform: uppercase;
  border-bottom: 0.09rem solid #CBC3B6;
  cursor: pointer;

  &:hover {
  background-color: #F2EEE8;
  }
  `,

  SidePanelClientBox: styled.div`
  background-color: #F2EEE8;
  `,

  ClientBoxText: styled.div``,

  ClientBoxTitle: styled.div`
  color: #3E4B39;
  font-size: 1.15rem;
  `,

  ClientBoxNames: styled.div`
  font-size: 1.6rem;
  `,

  ClientBoxValidity: styled.div`
  display: flex;
  `,

  ValidityRequest: styled.div`
  color: #3E4B39;
  `,

  ValidityExpDate: styled.div``,

  ClientBoxOptionArrow: styled.div``,

  SidePanelPause: styled.div`
  height: 1rem;
  border: 0.09rem solid #CBC3B6;
  `,

};
