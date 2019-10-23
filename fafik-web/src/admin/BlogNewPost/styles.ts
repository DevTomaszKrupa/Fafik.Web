import styled from 'styled-components';

export default {
  AdminMainSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TitleSection: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 54%;
  `,

  TitleRequest: styled.div`
    letter-spacing: 0.07rem;
    font-weight: 500;
    font-family: 'Montserrat';
  `,

  TitleInput: styled.input`
    height: 1.9rem;
    width: 24rem;
    border: 0.1rem solid #e3dbd4;
    padding-left: 1rem;
    font-size: 1.1rem;
  `,

  ButtonSection: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 2rem 0;
  `,

  PublicButtons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 23%;
  `,

  MainPostEditor: styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
  `,

  EditorSection: styled.div`
    width: 70.5%;
  `,

  ImageUploadSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  ImageUploadTitle: styled.div`
    letter-spacing: 0.05rem;
    font-weight: 500;
    padding-bottom: 0.9rem;
    font-family: 'Montserrat';
    font-size: 0.97rem;
  `,

  ImageUpload: styled.div`
    background-color: #fdfbfd;
    height: 14rem;
    width: 14rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.3rem solid #a9a196;
    cursor: pointer;

    &: hover {
      border: 0.3rem solid #f26d64;
    }
  `,
};
