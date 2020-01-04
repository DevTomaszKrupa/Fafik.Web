import styled from 'styled-components';

export default {
  AdminMain: styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
  `,

  AdminSidePanel: styled.div`
    background-color: #fdfbfd;
    height: 100%;
    font-family: 'Josefin Sans';
    letter-spacing: 0.1rem;
    border-right: 0.1rem dashed #f3f3f3;
  `,

  AdminMainPanel: styled.div`
    background-color: #ffffff;
    flex-grow: 1;
    height: 100%;
  `,
};
