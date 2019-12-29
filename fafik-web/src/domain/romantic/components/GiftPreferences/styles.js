import styled from 'styled-components';

export default {
  GiftSection: styled.div`
    flex-grow: 1;
    height: 60%;
    background-image: url('https://i.imgur.com/rzmxHCQ.png');
    background-size: 100rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  GiftSectionFrame: styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    width: 82rem;
    height: 20rem;
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
      width: 48rem;
      height: 23rem;
    }
  `,

  GiftSectionHeader: styled.div`
    font-family: 'Sacramento';
    font-size: 4rem;
    font-weight: 500;
    color: #683b35;
    padding-top: 0.6rem;

    @media (max-width: 570px) {
      font-size: 3.5rem;
    }
  `,

  GiftRebuses: styled.div`
    display: flex;
  `,

  GiftRebus: styled.div``,
};
