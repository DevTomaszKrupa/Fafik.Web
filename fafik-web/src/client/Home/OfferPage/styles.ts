import styled from 'styled-components';

interface ThemeImageProps {
  isMouseOn: boolean;
}

export default {
  ThemesSection: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3.5rem;
    flex-wrap: wrap;
  `,

  ThemeElement: styled.div`
    width: 27rem;
  `,

  ThemeBox: styled.div`
    width: 27rem;
    height: 17rem;
    position: relative;
  `,

  ThemeImage: styled.img`
    width: 27rem;
    height: 17rem;
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
    height: 43%;
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
    padding: 1.5rem 0 0.7rem 0;
  `,

  ThemeDescription: styled.div`
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.4rem;
    letter-spacing: 0.04rem;
  `,
};
