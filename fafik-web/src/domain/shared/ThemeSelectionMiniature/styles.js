import styled from 'styled-components';

export default {
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

    ${props => props.isMouseOn && `filter: blur(2px); opacity: 0.95;`}
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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin: 0.6rem 0
    font-size: 0.95rem;

    font-family: 'Montserrat';
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
    text-align: center;
    font-family: 'DM Serif Text';
    font-weight: 100;
    font-size: 2.24rem;
    padding: 1rem 0 0.7rem 0;
  `,

  ThemeDescription: styled.div`
    font-size: 0.74rem;
    text-align: center;
    line-height: 1.4rem;
    letter-spacing: 0.04rem;
    font-family: 'Montserrat';
  `,
};
