import styled from 'styled-components';

interface ThemeImageProps {
  isMouseOn: boolean;
}

export default {
  ThemeElement: styled.div`
    width: 30rem;
  `,

  ThemeBox: styled.div`
    width: 30rem;
    height: 19rem;
    position: relative;
  `,

  ThemeImage: styled.img`
    width: 30rem;
    height: 19rem;
    position: absolute;

    ${(props: ThemeImageProps) => props.isMouseOn && `filter: blur(2px); opacity: 0.95;`}
  `,

  ThemeTop: styled.div`
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  TopButtons: styled.div`
    height: 41%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  DemoButton: styled.div`
    cursor: pointer;
    height: 3.2rem;
    width: 18rem;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;

    font-family: 'Josefin Sans';
    letter-spacing: 0.08rem;
    font-weight: 600;

    &: hover {
      background-color: #ffffff;
    }
  `,

  ThemeText: styled.div`
    font-family: 'Josefin Sans';
    letter-spacing: 0.08rem;
  `,

  ThemeName: styled.div`
    font-weight: 600;
    font-size: 1.7rem;
    text-align: center;
    padding: 1.4rem 0 0.6rem 0;
  `,

  ThemeDescription: styled.div`
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.2rem;
  `,
};
