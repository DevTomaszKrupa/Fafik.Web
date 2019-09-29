import styled from 'styled-components';
import Select from 'react-select';

export default {
  Select: styled(Select)`
  width: 12rem;

  .css-yk16xz-control{
    border-radius: 2.7rem;
    border-width: 0.25rem;
    border-color: #EDEDEC;
  };

  .css-1hwfws3{
  font-size: 0.85rem;
  font-family: "Montserrat",sans-serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  };

  .css-1pahdxg-control{
  font-family: "Montserrat",sans-serif;
  font-weight: 400;
  letter-spacing: 0.05rem;

  border-radius: 2.7rem;
  border-width: 0.25rem;
  border-color: #B3B3B3;
  box-shadow: none;

  &: hover{
    border-radius: 2.7rem;
    border-width: 0.25rem;
    border-color: #B3B3B3;
  }
}

  .css-1n7v3ny-option {
    background-color: #EDEDEC;

    &: active{
      background-color: #B3B3B3;
      color: #ffffff;
    }
  }

  .css-9gakcf-option {
    background-color: #B3B3B3;
    color: #ffffff;
  }
  };

  `,
};
