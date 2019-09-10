import styled from 'styled-components';

export default {

  AdminPanelHeader: styled.div`
    background-color: #909F88;
    height: 5rem;
    display: flex;
    justify-content: center;
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

  NotificationsIcon: styled.img`
  height: 2rem;
  width: auto;
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
  margin-left: -0.3rem;
  `,

  ProfilBox: styled.div`
  border: 0.1rem solid #F2EEE8;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  `,

  ProfilAvatar: styled.img`
  height: 3rem;
  width: auto;
  `,

  ProfilMoreButton: styled.img`
  height: 0.8rem;
  width: auto;
  `,
};
