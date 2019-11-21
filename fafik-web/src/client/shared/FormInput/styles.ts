import styled from 'styled-components';

export default {
  FormInput: styled.input`
    border: 0.15rem solid #e3b7ac;
    border-radius: 2rem;
    height: 2rem;
    width: 16rem;
    margin-left: 0.6rem;
    padding-left: 0.8rem;
    font-size: 0.98rem;
    font-family: 'Montserrat';

    &: focus {
      outline: none;
    }
  `,
};
