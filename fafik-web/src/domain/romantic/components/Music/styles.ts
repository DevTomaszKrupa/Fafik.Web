import styled from 'styled-components';

export default {

  MusicSection: styled.div`
    display: flex;
    flex-grow: 1;
    height: 60%;
    background-color: #ebe3cd;
    justify-content: center;
    align-items: center;

    @media(max-width: 1400px){
      height: 78%;
      flex-direction: column;
  }

  @media(max-width: 775px){
    height: 100%;
  }

  @media(max-width: 490px){
    height: 111%;
  }
  `,

  MusicSectionFrame: styled.div`
    background-color: #ffffff;
    width: 76%;
    height: 69%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1400px){
      margin-top: -7rem;
      justify-content: flex-end;
      width: 95%;
      height: 73%;
    }

    @media(max-width: 775px){
      height: 65%;
    }

    @media(max-width: 570px){
      height: 73%;
    }
}
  `,

  MusicSectionCircleBox: styled.div`
  `,

  MusicSectionCircle: styled.div`
    width: 22rem;
    height: 22rem;
    border: 0.4rem solid #683b35;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -7rem;
    background-color: #ffffff;
    position: relative;

    @media(max-width: 1400px){
      width: 14rem;
      height: 14rem;
      margin-right: 0;
    }
  `,

  MusicCircleFrame: styled.div`
    width: 17.5rem;
    height: 17.5rem;
    border: 1rem solid #ebe4ce;
    border-radius: 50%;

    @media(max-width: 1400px){
      width: 10.5rem;
      height: 10.5rem;
    }
  `,

  MusicCircleIcon: styled.div``,

  MusicSectionTitle: styled.div`
    color: #683b35;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 600;
    text-align: center;
    font-size: 1.65rem;
    line-height: 2.5rem;
    padding: 3rem 0 0.8rem 0;
    width: 71%;

    @media(max-width: 1040px){
      font-size: 1.45rem;
      width: 85%;
    }

    @media(max-width: 950px){
      font-size: 1.3rem;
      width: 62%;
    }

    @media(max-width: 775px){
      font-size: 1.15rem;
      width: 83%;
    }
  `,

  MusicInputBox: styled.div`
    color: #683b35;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 1.2rem;

    @media(max-width: 900px){
      font-size: 1rem;
    }

    @media(max-width: 570px){
      display: flex;
      align-items: center;
      flex-direction: column;
    }

  `,

  MusicInput: styled.input`
    border: 0.2rem solid #683b35;
    border-radius: 2rem;
    width: 15rem;
    height: 1.8rem;

    padding-left: 1.2rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 0.8rem;

    @media(max-width: 900px){
      width: 14rem;
      height: 1.65rem;
    }

    @media(max-width: 570px){
      margin-top: 0.6rem;
    }
  `,

  MusicSectionInputs: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

  `,

  MusicButton: styled.button`
    background-color: #c3a88c;
    color: #ffffff;
    width: 9rem;
    height: 2.2rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    border-radius: 1rem;

    &: hover {
      background-color: #683b35;
    }
  `,

  MusicActionPanel: styled.div`
    display: flex;

    @media(max-width: 1400px){
      padding-bottom: 2rem;
    }

    @media(max-width: 775px){
      flex-direction: column;
      align-items: center;
    }
  `,

  MusicSectionButton: styled.div`
    display: flex;
    align-items: flex-end;
    padding-left: 2rem;

    @media(max-width: 775px){
      padding: 2rem 0 0 0;
    }
  `,
};
