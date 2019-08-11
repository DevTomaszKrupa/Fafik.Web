import styled from "styled-components";

interface ItemProps {
  textAlign: string;
}

interface CategoryPhotoProps {
  backgroundImage: string;
}

interface TitleProps {
  color: string;
}

interface SubtitleProps {
  color: string;
  padding: string;
}

interface BlogPostProps {
  backgroundImage: string;
}

export default {
  Header: styled.div`
    flex-grow: 1;
    background-image: url(https://i.imgur.com/2E99Q3y.jpg);
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 5% 0 0 0;
  `,

  Menu: styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    height: 18rem;
  `,

  MenuFrame: styled.div`
    border: 0.07rem solid #707070;
    flex-grow: 1;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  SideMenu: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    padding: 0 1rem;
  `,

  MenuCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  `,

  Item: styled.div`
    text-align: ${(props: ItemProps) => props.textAlign};
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
    cursor: pointer;

    &: hover {
      text-decoration: underline;
    }
  `,

  CenterNames: styled.div`
    font-family: "Sacramento";
    font-size: 3.3rem;
  `,

  CenterDate: styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
  `,

  SingleLineVertical: styled.div`
    height: 8.2rem;
    width: 0.1rem;
    background-color: #707070;
  `,

  SingleLineHorizontal: styled.div`
    width: 14rem;
    height: 0.1rem;
    background-color: #707070;
    margin: 0.5rem 0 1rem 0;
  `,

  CenterQuote: styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: italic;
    text-align: center;
    line-height: 1.4rem;
  `,

  DoubleLineTheme: styled.div`
    border: 0.07rem solid #707070;
    flex-grow: 1;
    padding: 0.3rem;
    margin-top: 1.2rem;
  `,

  AboutUsBox: styled.div`
    padding-top: 2rem;
    align-items: center;
    flex-grow: 1;
    height: 70%;
    display: flex;
    justify-content: center;
  `,

  AboutUsPhoto: styled.div`
    background-image: url("https://i.imgur.com/h8nhCS7.jpg");
    width: 17rem;
    height: 25rem;
    background-size: 107%;
    background-repeat: no-repeat;
  `,

  AboutUsPhotoBox: styled.div`
    border: 0.07rem solid #707070;
    width: 20rem;
    height: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  AboutUsPhotoFrame: styled.div`
    background-color: #ededec;
    width: 19rem;
    height: 27rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  AboutBoxText: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
  `,

  TextWelcome: styled.div`
    font-family: "Sacramento";
    font-size: 4.3rem;
    color: #501c15;
  `,

  AboutUs: styled.div`
    font-family: "Montserrat", sans-serif;
    line-height: 2.3rem;
    font-size: 1.3rem;
    padding: 0.7rem 0 2.7rem 0;
  `,

  ToRSVPButton: styled.button`
    font-family: "Sacramento";
    font-size: 2.8rem;
    font-weight: 500;
    background-color: #ffffff;
    border: 0.1rem solid #501c15;
    color: #501c15;
    width: 20rem;
    height: 4rem;
    cursor: pointer;
  `,

  QuoteSection: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.8rem 0 3.5rem 0;
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 27%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  `,

  QuoteText: styled.div`
    font-family: "Sacramento";
    font-size: 2.3rem;
    text-align: center;
    padding-bottom: 1rem;
  `,

  QuoteAuthor: styled.div`
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
  `,

  Gallery: styled.div`
    flex-grow: 1;
    background-image: url(https://i.imgur.com/2E99Q3y.jpg);
    height: 88%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 20%;
  `,
  GalleryOpacity: styled.div`
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.14);
    height: 100%;
    display: flex;
    align-items: center;
  `,

  GalleryFrame: styled.div`
    border: 0.07rem solid #ffffff;
    flex-grow: 1;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.div`
    color: ${(props: TitleProps) => props.color};
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 2.3rem;
    padding: 2.5rem 0 1rem 0;
    font-weight: 500;
  `,

  Subtitle: styled.div`
    color: ${(props: SubtitleProps) => props.color};
    font-family: "Sacramento";
    text-align: center;
    font-size: 2rem;
    line-height: 2.6rem;
    padding: ${(props: SubtitleProps) => props.padding};
  `,

  GalleryCategories: styled.div`
    flex-grow: 1;
    display: flex;
    width: 80%;
    justify-content: space-around;
  `,

  GalleryCard: styled.div`
    background-color: #ffffff;
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  `,

  CategoryPhoto: styled.div`
    width: 12rem;
    height: 12rem;
    background-image: ${(props: CategoryPhotoProps) => props.backgroundImage};
    background-size: 161%;
    background-repeat: no-repeat;
    background-position: 21% 18%;
  `,

  CategoryName: styled.div`
    font-family: "Sacramento";
    font-size: 2.3rem;
    padding: 1.15rem 0;
  `,

  BlogSection: styled.div`
    background-color: #ebe3cd;
    flex-grow: 1;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  BlogSectionFrame: styled.div`
    border: 0.07rem solid #707070;
    padding: 1.2rem 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  BlogPanel: styled.div`
    background-color: #ffffff;
    width: 90rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  BlogRecentPosts: styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding: 0.6rem 0 2rem 0;
  `,

  BlogPost: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  BlogPostPhoto: styled.div`
    background-image: ${(props: BlogPostProps) => props.backgroundImage};
    width: 20rem;
    height: 2.5rem;
    background-position-y: 52%;
    background-size: 100%;
  `,

  BlogPostDate: styled.div`
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-weight: 400;
    color: #676758;
    font-size: 0.8rem;
    padding: 0.35rem;
  `,

  BlogPostTitle: styled.div`
    font-family: "Montserrat", sans-serif;
    text-align: center;
    letter-spacing: 0.07rem;
    font-weight: 500;
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
  `,

  MapSection: styled.div`
    flex-grow: 1;
    height: 70%;
    display: flex;
    align-items: center;
  `,

  MapCircle: styled.div`
    background-color: #dfd2ae;
    width: 28rem;
    height: 28rem;
    border-radius: 50%;
  `,

  MapTitle: styled.div`
    color: #000000;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.9rem;
    font-weight: 500;
    text-align: center;
  `,

  MapSubtitle: styled.div`
    color: #000000
    font-family: "Sacramento";
    text-align: center;
    font-size: 2.1rem;
    line-height: 2.4rem;
    padding: 1.2rem 
  `,

  MapTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  MapButton: styled.button`
    background-color: #ebe3cd;
    border: none;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: center;
    width: 22rem;
    height: 3.2rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  `,

  MapImage1: styled.div`
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 18rem;
    height: 19rem;
    -webkit-transform: rotate(238deg);
    position: relative;
    top: 5rem;
  `,

  MapImage2: styled.div`
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 118%;
    background-repeat: no-repeat;
    width: 23rem;
    height: 22rem;
    position: relative;
    top: 6rem;
  `,

  MapContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  `
};
