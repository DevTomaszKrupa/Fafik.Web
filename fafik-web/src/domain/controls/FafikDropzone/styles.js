import styled from 'styled-components';

export default {
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
