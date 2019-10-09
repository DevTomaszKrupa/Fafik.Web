import styled from 'styled-components';
import { IMAGE_STORAGE } from 'application/config';

export default {
  ThemeBox: styled.div`
    position: absolute;
  `,

  ThemeImage: styled.img`
    width: 30rem;

    &: hover {
      filter: blur(2px);
      opacity: 0.95;
    }
  `,

  ThemeTop: styled.div`
    width: 100%;
    height: 100%;
    z-index: 99;
  `,

  DemoButton: styled.div`
    cursor: pointer;
    height: 3rem;
    width: 8rem;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 1rem;
  `,
};
