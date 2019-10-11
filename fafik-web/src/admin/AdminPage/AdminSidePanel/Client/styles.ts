import styled from 'styled-components';

interface SidePanelItemProps {
  active?: boolean;
}

export default {
  AdminSidePanel: styled.div`
    background-color: #fdfbfd;
    width: 18%;
    height: 100%;
    border: 0.1rem solid #cbc3b6;
    font-family: 'Josefin Sans';
    letter-spacing: 0.1rem;
  `,

  SidePanelItem: styled.div`
    ${(props: SidePanelItemProps) =>
      props.active &&
      `
      background-color: #F2EEE8;
  `}
    ${(props: SidePanelItemProps) =>
      !props.active &&
      `
      background-color: #FDFBFD;
  `}
  display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 0;
    color: #000000;
    text-transform: uppercase;
    border-bottom: 0.09rem solid #cbc3b6;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.05rem;

    &:hover {
      background-color: #f2eee8;
    }
  `,

  SidePanelClientBox: styled.div`
    background-color: #f2eee8;
  `,

  ClientBoxText: styled.div`
    padding: 1.5rem 0 1.3rem 1.3rem;
  `,

  ClientBoxTitle: styled.div`
    color: #3e4b39;
    font-size: 1.15rem;
    letter-spacing: 0.04rem;
  `,

  ClientBoxNames: styled.div`
    text-transform: uppercase;
    padding: 0.7rem 0;
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
    font-weight: 600;
  `,

  ClientBoxValidity: styled.div`
    display: flex;
    align-items: center;
  `,

  ValidityRequest: styled.div`
    color: #3e4b39;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    font-size: 0.9rem;
  `,

  ValidityExpDate: styled.div`
    padding: 0.3rem 0.8rem;
    height: 1rem;
    width: 5rem;
    background-color: #d5a396;
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
    border-top: 0.09rem solid #cbc3b6;
    border-bottom: 0.09rem solid #cbc3b6;
  `,

  SidePanelPremiumItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 0;
    background-color: #f9e3d6;
    color: #000000;
    text-transform: uppercase;
    border-bottom: 0.09rem solid #cbc3b6;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #efd4c4;
    }
  `,
};
