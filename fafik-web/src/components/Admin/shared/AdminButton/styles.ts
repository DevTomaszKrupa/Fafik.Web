import styled from 'styled-components';

interface ButtonProps {
  buttonStyle: 'gray' | 'pink';
}

export default {

  AButton: styled.button`
  font-family: 'Josefin Sans';
  font-size: 1.2rem;
  height: 2.2rem;
  padding: 0.3rem 1.3rem;
  display: flex;
  align-items: center;
  
  ${(props: ButtonProps) => props.buttonStyle === 'gray' && `
    background-color: #FDFBFD;
    color: #000000;
    border: 0.1rem solid #DED4CC;

    &: hover{
      background-color: #DED4CC;
      color: #FDFBFD;
    }
  `}

  ${(props: ButtonProps) => props.buttonStyle === 'pink' && `
    background-color: #E3B7AC;
    color: #FFFFFF;
    font-weight: 800;

    &: hover{
      background-color: #D6A092;
      color: #FFFFFF;
    }
`}
  `,

};
