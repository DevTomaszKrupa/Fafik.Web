import styled from 'styled-components';

interface SidePanelItemProps {
  active?: boolean;
}

export default {
  AdminSidePanel: styled.div`
  background-color: #FDFBFD;
  width: 18%;
  height: 100%;
  border: 0.1rem solid #CBC3B6;
  font-family: 'Josefin Sans';
  letter-spacing: 0.1rem;
  `,

  SidePanelItem: styled.div`
  ${(props: SidePanelItemProps) => props.active && `
      background-color: #F2EEE8;
  `}
  ${(props: SidePanelItemProps) => !props.active && `
      background-color: #FDFBFD;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 0;
  color: #000000;
  text-transform: uppercase;
  border-bottom: 0.09rem solid #CBC3B6;
  cursor: pointer;
  font-weight: 500;

  &:hover {
  background-color: #F2EEE8;
  }
  `,

  SidePanelClientBox: styled.div`
  background-color: #F2EEE8;
  `,

  ClientBoxText: styled.div`
  padding: 1.5rem 0 1.3rem 1.3rem;
  `,

  ClientBoxTitle: styled.div`
  color: #3E4B39;
  font-size: 1.15rem;
  `,

  ClientBoxNames: styled.div`
  font-size: 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.17rem;
  padding: 0.7rem 0;
  `,

  ClientBoxValidity: styled.div`
  display: flex;
  align-items: center;
  `,

  ValidityRequest: styled.div`
  color: #3E4B39;
  `,

  ValidityExpDate: styled.div`
  padding: 0.3rem 0.8rem;
  height: 1rem;
  width: 5rem;
  background-color: #D5A396;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  margin-left: 0.35rem;
  color: #ffffff;
  `,

  ClientBoxOptionArrow: styled.div``,

  SidePanelPause: styled.div`
  height: 0.8rem;
  border: 0.09rem solid #CBC3B6;
  `,

  SidePanelPremiumItem: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 0;
  background-color: #F9E3D6;
  color: #000000;
  text-transform: uppercase;
  border-bottom: 0.09rem solid #CBC3B6;
  cursor: pointer;
  font-weight: 500;

  &:hover {
  background-color: #EFD4C4;
  }
  `,
};
