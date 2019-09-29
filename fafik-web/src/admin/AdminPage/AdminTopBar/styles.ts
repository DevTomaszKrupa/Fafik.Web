import styled from 'styled-components';

export default {
  AdminPanelHeader: styled.div`
    background-color: #909f88;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
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
    width: 23rem;
  `,

  HeaderRightSide: styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};
