import styled from 'styled-components';

export default {
  BlogContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  AdminCheckbox: styled.div`
    height: 2rem;
    width: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdfbfd;
    border: 0.1rem solid #ded4cc;
  `,

  Checkbox: styled.input``,

  CheckboxPosts: styled.input``,

  AdminEditButtonsInputs: styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 2rem 0;
  `,

  ButtonsPart1: styled.div`
    display: flex;
  `,

  ButtonsPart2: styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
  `,

  SearchBox: styled.div`
    display: flex;
  `,

  SearchInput: styled.input`
    height: 1.9rem;
    width: 13rem;
    border: 0.1rem solid #e3dbd4;
    padding-left: 1rem;
    font-family: 'Josefin Sans';
    font-size: 1.1rem;

    &: focus {
      outline: none;
    }
  `,

  SearchButton: styled.button`
    height: 2.25rem;
    width: 3rem;
    border: 0.1rem solid #e3dbd5;
    background-color: #fdfbfd;
    cursor: pointer;

    &: hover {
      background-color: #ded4cc;
      color: #fdfbfd;
    }
    &: focus {
      outline: none;
    }
  `,

  BlogPostSection: styled.div`
    display: flex;
  `,

  TableCheckbox: styled.div`
    width: 4rem;
    height: 4rem;
    border-top: 0.15rem solid #e3dbd5;
    border-bottom: 0.15rem solid #e3dbd5;
    border-right: 0.15rem solid #e3dbd5;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  TableInfoBox: styled.div`
    width: 55rem;
    height: 4rem;
    border-top: 0.15rem solid #e3dbd5;
    border-bottom: 0.15rem solid #e3dbd5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Josefin Sans';
  `,

  DateTitleBox: styled.div`
    padding-left: 1rem;
  `,

  PostDate: styled.div`
    color: #dfd6cf;
    font-weight: 600;
    padding-bottom: 0.3rem;
  `,

  PostTitle: styled.div`
    font-size: 1.15rem;
  `,

  OptionBox: styled.div`
    font-size: 0.85rem;
    color: #dfd6cf;
    font-weight: 800;
    cursor: pointer;
  `,
};
