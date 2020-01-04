import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGE_STORAGE } from 'application/config';

export default {
  SidePanelItem: styled.div`
    ${props =>
      props.active &&
      `
      background-color: #F2EEE8;
      border-radius: 0 3rem 3rem 0;
      font-weight: 600;
  `}
    ${props =>
      !props.active &&
      `
      background-color: #FDFBFD;
      font-weight: 500;
  `}
    display: flex;
    align-items: center;
    padding: 0.85rem 0 0.85rem 2rem;
    margin: 0.3rem 0.3rem;
    color: #444343;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.05rem;
    font-family: 'Montserrat';
    font-size: 0.83rem;

    &:hover {
      background-color: #f2eee8;
      border-radius: 0 3rem 3rem 0;
      font-weight: 600;
    }
  `,

  FAIcon: styled(FontAwesomeIcon)`
    padding-right: 1rem;
    font-size: 0.7rem;
  `,

  SidePanelClientBox: styled.div`
    opacity: 86%;
    color: #ffffff;
    padding: 1.8rem 1.5rem;
    background-size: 124%;
    background-repeat: no-repeat;
    background-position-y: 53%;
    background-position: 50% 61%;
    background-image: url("${IMAGE_STORAGE}/app/admin-side-panel-header.jpg");
  `,

  ClientBoxNames: styled.div`
    letter-spacing: 0.04rem;
    font-family: 'DM Serif Text';
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    padding-bottom: 0.2rem;
  `,

  WeddingDate: styled.div`
    letter-spacing: 0.04rem;
    text-align: center;
    font-size: 0.85rem;
    line-height: 1.2rem;
    font-family: 'Montserrat';
  `,

  SidePanelPause: styled.div`
    height: 0.6rem;
    border-top: 0.09rem dashed #cbc3b6;
    border-bottom: 0.09rem dashed #cbc3b6;
  `,

  SidePanelPremiumItem: styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: center;
    padding: 1.1rem 0 1.1rem 2rem;
    background-color: #f26d64;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.86rem;

    &:hover {
      background-color: #e8493e;
      font-weight: 600;
    }
  `,
};
