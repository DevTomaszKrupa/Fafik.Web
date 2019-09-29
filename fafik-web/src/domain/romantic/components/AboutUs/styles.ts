import styled from 'styled-components';
import { IMAGE_STORAGE } from 'application/config';

interface AboutUsPhotoProps {
  aboutUsImg: string;
}

export default {
  AboutUsBox: styled.div`
    padding: 4rem 0 3rem 0;
    align-items: center;
    flex-grow: 1;
    display: flex;
    justify-content: center;

    @media (max-width: 610px) {
      flex-direction: column;
      padding: 3rem 0 2rem 0;
    }
  `,

  AboutUsPhoto: styled.div`
    background-image: ${(props: AboutUsPhotoProps) =>
      `url("${IMAGE_STORAGE}${props.aboutUsImg}")`};
    width: 17rem;
    height: 25rem;
    background-size: 107%;
    background-repeat: no-repeat;

    @media (max-width: 900px) {
      width: 12rem;
      height: 17.5rem;
    }
  `,

  AboutUsPhotoBox: styled.div`
    border: 0.07rem solid #707070;
    width: 20rem;
    height: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      width: 14rem;
      height: 19.6rem;
    }

    @media (max-width: 610px) {
      display: none;
    }
  `,

  AboutUsPhotoFrame: styled.div`
    background-color: #ededec;
    width: 19rem;
    height: 27rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      width: 13.3rem;
      height: 18.9rem;
    }
  `,

  AboutBoxText: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
    width: 40%;

    @media (max-width: 900px) {
      padding-left: 3rem;
      width: 45%;
    }

    @media (max-width: 610px) {
      width: 89%;
      align-items: center;
      padding-left: 0;
    }
  `,

  TextWelcome: styled.div`
    font-family: 'Sacramento';
    font-size: 4.3rem;
    color: #501c15;

    @media (max-width: 900px) {
      font-size: 3.3rem;
    }
  `,

  AboutUs: styled.div`
    font-family: 'Montserrat', sans-serif;
    line-height: 2.3rem;
    font-size: 1.3rem;
    padding: 0.7rem 0 2.7rem 0;

    @media (max-width: 900px) {
      font-size: 1rem;
      padding: 0.7rem 0 1.4rem 0;
    }

    @media (max-width: 610px) {
      text-align: center;
      width: 87%;
    }
  `,

  ToRSVPButton: styled.button`
    font-family: 'Sacramento';
    font-size: 2.8rem;
    font-weight: 500;
    background-color: #ffffff;
    border: 0.1rem solid #501c15;
    color: #501c15;
    width: 20rem;
    height: 4rem;
    cursor: pointer;

    &: hover {
      box-shadow: 0.01rem 0.01rem 0.8rem #501c15;
    }

    @media (max-width: 900px) {
      font-size: 2.3rem;
      width: 18rem;
      height: 3rem;
    }
  `,
};
