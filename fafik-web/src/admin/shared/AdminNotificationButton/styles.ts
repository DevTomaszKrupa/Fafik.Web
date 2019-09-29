import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';

export default {

  DropdownMenu: styled(Menu)`
  .MuiPaper-root{
    width: 12%;
  }`,

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

