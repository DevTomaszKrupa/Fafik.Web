import styled from 'styled-components';

export default {
  RsvpModal: styled.div`
  height: 100%
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
`,

  RsvpModalFrame: styled.div`
  border: 0.09rem solid #000000;
  height: 97%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
  overflow-y: auto;
}
`,

  TopOptionsSection: styled.div`
  width: 100%
  height: 4rem;
  display: flex;
  justify-content: flex-end;
`,

  ClosingBox: styled.div`
  background-color: #EDEDEC;
  width: 4rem;
  height: 7rem;
  margin-top: -1.8rem;
  margin-right: -0.1rem;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: fixed;
}
`,

  ClosingIcon: styled.img`
    width: 1.8rem;
    padding-bottom: 1rem;
  `,

  RsvpText: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  RsvpTitle: styled.div`
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-align: center;
  `,

  RsvpSubtitle: styled.div`
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.2rem;
    letter-spacing: 0.1rem;
    width: 77%;
    text-align: center;
    padding: 1rem 0;
  `,

  RsvpDate: styled.div`
    font-family: 'Sacramento';
    font-size: 2.2rem;
    text-align: center;
  `,

  RsvpEmailBox: styled.div`
  width: 100%
  justify-content: center;
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
  `,

  RsvpEmailRequest: styled.div`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding-right: 2rem;
  `,

  RsvpInput: styled.input`
    width: 14rem;
    height: 2.1rem;
    border-radius: 1.4rem;
    border: 0.25rem solid #ededec;
    padding: 0 0.4rem 0 1rem;

    font-size: 0.85rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    letter-spacing: 0.05rem;

    &: hover {
      border: 0.25rem solid #b3b3b3;
    }
  `,

  RsvpListRequest: styled.div`
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    padding: 1.8rem 0;
  `,

  SingleFormToFill: styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.85rem;
  `,

  AgeListInput: styled.input``,

  DietListInput: styled.div``,

  FormIcon: styled.div`
    font-size: 1.8rem;
    padding-left: 0.5rem;
    -webkit-text-stroke: 0.17rem #ffffff;
  `,
};
