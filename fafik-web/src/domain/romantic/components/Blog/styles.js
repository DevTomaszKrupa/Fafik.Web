import styled from 'styled-components';

export default {
  SingleLineHorizontal: styled.div`
    width: 14rem;
    height: 0.1rem;
    background-color: #707070;
    margin: 0.5rem 0 1rem 0;
  `,

  Title: styled.div`
    color: ${props => props.color};
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.1rem;
    font-size: 2.3rem;
    padding: 1rem 0;
    font-weight: 500;
  `,

  Subtitle: styled.div`
    color: ${props => props.color};
    font-family: 'Sacramento';
    text-align: center;
    font-size: 2rem;
    line-height: 2.6rem;
    padding: ${props => props.padding};
    width: 60%;
  `,

  BlogSection: styled.div`
    background-color: #ebe3cd;
    flex-grow: 1;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 945px) {
      height: 95%;
    }

    @media (max-width: 725px) {
      height: 115%;
    }
  `,

  BlogSectionFrame: styled.div`
    border-top: 0.07rem solid #707070;
    border-bottom: 0.07rem solid #707070;
    padding: 2.2rem 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `,

  BlogPanel: styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 2.6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  BlogRecentPosts: styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 0.6rem 0 2rem 0;

    @media (max-width: 945px) {
      flex-wrap: wrap;
      padding: 0 0 1rem 0;
    }
  `,

  BlogPost: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1140px) {
      padding: 0 1.5rem;
    }

    @media (max-width: 945px) {
      padding: 0.7rem 0.5rem;
    }
  `,

  BlogPostPhoto: styled.div`
    background-image: ${props => props.backgroundImage};
    width: 20rem;
    height: 2.5rem;
    background-position-y: 52%;
    background-size: 100%;

    @media (max-width: 1140px) {
      height: 3rem;
      width: 17rem;
    }

    @media (max-width: 570px) {
      height: 2.5rem;
    }
  `,

  BlogPostDate: styled.div`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 400;
    color: #676758;
    font-size: 0.8rem;
    padding: 0.35rem;
  `,

  BlogPostTitle: styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    letter-spacing: 0.07rem;
    font-weight: 500;

    @media (max-width: 945px) {
      width: 100%;
      font-size: 0.9rem;
    }
  `,

  ShowMoreButton: styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    background-color: #a6726c;
    color: #ffffff;
    width: 18rem;
    height: 2.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    cursor: pointer;

    &: hover{
      background-color: #884239;
    }

    @media(max-width: 900px){
        width: 16rem
        height: 2.2rem;
        font-size: 1rem;
    }
  `,
};
