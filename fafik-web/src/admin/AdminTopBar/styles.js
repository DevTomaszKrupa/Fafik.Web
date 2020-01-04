import styled from 'styled-components';

export default {
  AdminPanelHeader: styled.div`
    background-color: #f2eee8;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    font-family: 'Montserrat';
    box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.4);
    z-index: 1;
  `,

  HeaderLeftSide: styled.div`
    width: 33%;
  `,

  HeaderLogo: styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  AdminLogo: styled.img`
    width: 17rem;
    cursor: pointer;
  `,

  HeaderRightSide: styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};
