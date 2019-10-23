import styled from 'styled-components';

interface SidePanelItemProps {
  active?: boolean;
}

export default {
  AdminSidePanel: styled.div`
    background-color: #fdfbfd;
    width: 19%;
    height: 100%;
    border: 0.1rem solid #cbc3b6;
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
    letter-spacing: 0.05rem;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 0.97rem;

    &:hover {
      background-color: #f2eee8;
    }
  `,

  SidePanelClientBox: styled.div`
    background-color: #dbcfc5;
    color: #ffffff;
    padding: 1.3rem 1.5rem;
  `,

  ClientBoxNames: styled.div`
    letter-spacing: 0.04rem;
    font-family: 'DM Serif Text';
    font-size: 2.3rem;
    line-height: 2.5rem;
    text-align: center;
    padding-bottom: 0.2rem;
    padding-top: 0.4rem;
  `,

  WeddingDate: styled.div`
    letter-spacing: 0.04rem;
    text-align: center;
    font-size: 0.96rem;
    line-height: 1.4rem;
    font-family: 'Montserrat';
  `,

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
    background-color: #f26d64;
    color: #ffffff;
    text-transform: uppercase;
    border-bottom: 0.09rem solid #cbc3b6;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #e8493e;
    }
  `,
};
