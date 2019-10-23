import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default {
  ProfilBox: styled.div`
    border: 0.1rem solid #ffffff;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
  `,

  ButtonTitle: styled.div`
    color: #3e4b39;
    letter-spacing: 0.1rem;
    font-family: 'Montserrat';
    padding-left: 0.5rem;
    font-weight: 800;
    padding-top: 0.2rem;
  `,

  DropdownMenu: styled(Menu)`
    .MuiPaper-root {
      width: 12%;
    }
  `,

  MenuButton: styled(MenuItem)`
    .MuiMenuItem-root {
      font-family: 'Josefin Sans';
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }
  `,
};
