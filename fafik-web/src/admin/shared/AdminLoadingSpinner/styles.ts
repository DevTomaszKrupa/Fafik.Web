import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default {
  Spinner: styled.div`
    border: 1rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 1rem solid #e3b7ac;
    width: 5rem;
    height: 5rem;

    ${css`
      animation: ${spin} 2s linear infinite;
    `}
  `,
};
