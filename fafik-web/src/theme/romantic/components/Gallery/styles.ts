import styled from 'styled-components';


interface TitleProps {
  color: string;
}

interface SubtitleProps {
  color: string;
  padding: string;
}

interface GalleryProps {
  galleryImage: string;
}

interface CategoryPhotoProps {
  backgroundImage: string;
}

export default {
  Gallery: styled.div`
    flex-grow: 1;
    background-image: ${(props: GalleryProps) =>
      `url("http://localhost/Fafik/${props.galleryImage}")`};
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `,
  GalleryOpacity: styled.div`
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  GalleryFrame: styled.div`
    border-top: 0.07rem solid #ffffff;
    border-bottom: 0.07rem solid #ffffff;
    flex-grow: 1;
    margin: 1.7rem 0;
    padding: 3rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 785px){
      justify-content: center;
    }
  `,

  GalleryTitle: styled.div`
    color: ${(props: TitleProps) => props.color};
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 2.3rem;
    padding-bottom: 1rem;
    font-weight: 500;
    text-shadow: 0.2rem 0.2rem 0.8rem #000000;
  `,

  Subtitle: styled.div`
    color: ${(props: SubtitleProps) => props.color};
    font-family: "Sacramento";
    text-align: center;
    font-size: 2rem;
    line-height: 2.6rem;
    padding: ${(props: SubtitleProps) => props.padding};
    width: 60%;

    @media(max-width: 785px){
      padding: 0 0 1.5rem 0;
      width: 80%;
    }

    @media(max-width: 550px){
      width: 90%
      font-size: 1.9rem;
    }
  `,

  GalleryCategories: styled.div`
    display: flex;
    width: 90%;
    justify-content: center;

    @media(max-width: 785px){
      flex-wrap: wrap;
      flex-grow: 0;
    }
  `,

  GalleryCard: styled.div`
    background-color: #ffffff;
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    box-shadow: 0.4rem 0.4rem 2rem #343434;
    margin: 0 2.5%;

    &: hover{
      background-color: rgba(255, 255, 255, 0.95)
  }
    @media(max-width: 900px){
      width: 15rem;
      height: 18rem;
    }

    @media(max-width: 785px){
      justify-content: center;
      width: 13rem;
      height: 13rem;
      margin: 1rem 1rem;
      &: hover{
          background-color: rgba(255, 255, 255, 0.8)
      }
    }
    @media(max-width: 550px){
      width: 10rem;
      height: 10rem;
    }
  `,

  CategoryPhoto: styled.div`
    width: 12rem;
    height: 12rem;
    background-image: ${(props: CategoryPhotoProps) => props.backgroundImage};
    background-size: 161%;
    background-repeat: no-repeat;
    background-position: 21% 18%;

    @media(max-width: 900px){
      width: 82%;
      height: 64%;
    }

    @media(max-width: 785px){
      width: 10rem;
      height: 10rem;
    }

    @media(max-width: 550px){
      width: 82%;
      height: 82%;
    }
  `,

  CategoryName: styled.div`
    font-family: "Sacramento";
    font-size: 2.3rem;
    padding: 1.15rem 0;
    text-align: center;

    @media(max-width: 900px){
      font-size: 1.8rem;
    }

    @media(max-width: 785px){
      display: none;
    }
  `,
};
