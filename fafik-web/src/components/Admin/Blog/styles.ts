import styled from 'styled-components';

export default {

  AdminCheckbox: styled.div`
  height: 2rem;
  width: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FDFBFD;
  border: 0.1rem solid #DED4CC;
  `,

  Checkbox: styled.input` `,

  AdminEditButtonsInputs: styled.div`
  display: flex;
  `,

  SearchBox: styled.div`
  display: flex;
  `,

  SearchInput: styled.input`
  height: 1.9rem;
  width: 13rem;
  border: 0.1rem solid #E3DBD4;
  padding-left: 1rem;
  font-family: 'Josefin Sans';
  font-size: 1.1rem;

  &: focus{
    outline: none;
  }
  `,

  SearchButton: styled.button`
  height: 2.25rem;
  width: 3rem;
  border: 0.1rem solid #E3DBD5;
  background-color: #FDFBFD;
  cursor: pointer;
  
  &: focus{
    outline: none;
  }
  `,

  TableCheckbox: styled.div`
  width: 5rem;
  height: 5rem;
  border-top: 0.1rem solid #E3DBD5;
  border-bottom: 0.1rem solid #E3DBD5;
  border-right: 0.1rem solid #E3DBD5;
  display: flex;
  justify-content: center;
  align-items: center;
  `,

  TableInfoBox: styled.div`
  width: 30rem;
  height: 5rem;
  border-top: 0.1rem solid #E3DBD5;
  border-bottom: 0.1rem solid #E3DBD5;
  `,

  DateTitleBox: styled.div``,

  PostDate: styled.div``,

  PostTitle: styled.div``,

  OptionBox: styled.div``,

};
