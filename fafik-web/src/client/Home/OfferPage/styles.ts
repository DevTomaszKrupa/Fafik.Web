import styled, { keyframes, css } from 'styled-components';

interface SelectedThemeSectionProps {
  isVisible: boolean;
}

const fadeOut = keyframes`
  0% {
  opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }

  100% {
    opacity: 1;
    visibility: visible;

  }
`;

const fadeOutAnimation = (props: any) =>
  css`
    ${fadeOut} 2s ease-out;
  `;

const fadeInAnimation = (props: any) =>
  css`
    ${fadeIn} 2s ease-in;
  `;

export default {
  SelectedThemeSection: styled.div`
    display: flex;
    padding: 2.5rem 2rem;
    margin: 1.5rem;
    box-shadow: 0.2rem 0.2rem 0.5rem #cec9c9;
    font-family: 'Josefin Sans';

    ${(props: SelectedThemeSectionProps) =>
      props.isVisible &&
      `
      animation: ${fadeInAnimation};
    `}

    ${(props: SelectedThemeSectionProps) =>
      !props.isVisible &&
      `
      animation: ${fadeOutAnimation};
      display: none;
    `}
  `,

  ThemesSection: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3.5rem;
    flex-wrap: wrap;
  `,

  Form: styled.div`
    flex-grow: 1;
  `,

  Buttons: styled.div`
    font-family: 'Josefin Sans';
    letter-spacing: 0.07rem;
    padding: 1.5rem 2rem 0 0;
    display: flex;
    justify-content: flex-end;
  `,

  BackButton: styled.button`
    background-color: #fcfbf9;
    color: #000000;
    padding: 1rem 1.3rem;
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1.03rem;
    letter-spacing: 0.07rem;
    font-weight: 600;
  `,

  ActionButton: styled.button`
    background-color: #f2d0be;
    color: #ffffff;
    padding: 1rem 1.3rem;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1.03rem;
    letter-spacing: 0.07rem;
    font-weight: 600;
  `,
};
