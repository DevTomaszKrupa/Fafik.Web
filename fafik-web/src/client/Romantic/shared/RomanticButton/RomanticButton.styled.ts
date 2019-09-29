import styled from 'styled-components';

interface ButtonProps {
  buttonStyle: 'green' | 'red';

}

export default {

  Button: styled.button`
  width: 8.3rem;
  height: 2.4rem;
  border: none;
  border-radius: 1.2rem;
  color: #ffffff;
  font-size: 1.1rem;
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  letter-spacing: 0.05rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: ButtonProps) => props.buttonStyle === 'green' && `
    background: #90B288;
    &: hover{
      background-color: #85A57E;
    }
  `}

  ${(props: ButtonProps) => props.buttonStyle === 'red' && `
  background: #D47171;
  &: hover{
    background-color: #CF5F5F;
  }
`}
  `,

};
