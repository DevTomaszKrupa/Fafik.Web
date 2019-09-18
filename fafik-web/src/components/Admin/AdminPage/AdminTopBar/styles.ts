import styled from 'styled-components';

export default {

  AdminPanelHeader: styled.div`
    background-color: #909F88;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
  `,

  HeaderLeftSide: styled.div`
    flex-grow: 1;
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
  NotificationBox: styled.div`
  display: flex;
  `,

  NotificationsQuantity: styled.div`
  background-color: #A14848;
  font-family: 'Josefin Sans';
  font-weight: 800;
  color: #ffffff;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.8rem;
  font-size: 0.9rem;
  margin-right: 0.6rem;
  `,
};
