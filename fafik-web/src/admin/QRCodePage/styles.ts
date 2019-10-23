import styled from 'styled-components';

export default {
  PageDescription: styled.div`
    font-family: 'Montserrat';
    font-size: 0.97rem;
    line-height: 1.6rem;
    font-weight: 400;
    padding: 1.5rem 0 0 6.8rem;
  `,

  QRInfographic: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  `,

  QRgraphic: styled.img`
    width: 13rem;
    height: auto;
    padding: 0 1rem;
  `,

  QRMain: styled.div`
    border-radius: 50%;
    border: 0.3rem solid #e8493e;
    width: 16rem;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.15);
  `,

  QRFrame: styled.div`
    border-radius: 50%;
    border: 0.3rem solid #000000;
    width: 14rem;
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
