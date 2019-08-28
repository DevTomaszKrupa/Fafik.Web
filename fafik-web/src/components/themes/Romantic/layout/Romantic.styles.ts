import styled from "styled-components";

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

interface AboutUsPhotoProps {
  aboutUsImg: string;
}

interface GalleryProps {
  galleryImage: string;
}

export default {

  SingleLineHorizontal: styled.div`
    width: 14rem;
    height: 0.1rem;
    background-color: #707070;
    margin: 0.5rem 0 1rem 0;
  `,

  DoubleLineTheme: styled.div`
    border-top: 0.07rem solid #707070;
    border-bottom: 0.07rem solid #707070;
    flex-grow: 1;
    padding: 0.3rem;
    margin-top: 1.2rem;
  `,

  AboutUsBox: styled.div`
    padding-top: 2rem;
    align-items: center;
    flex-grow: 1;
    height: 83%;
    display: flex;
    justify-content: center;

    @media(max-width: 900px){
      height: 60%;
    }

    @media(max-width: 650px){
      height: 70%;
    }

    @media(max-width: 610px){
      height: 54%;
      flex-direction: column;
    }
  `,

  AboutUsPhoto: styled.div`
  background-image: ${(props: AboutUsPhotoProps) =>
      `url("http://localhost/Fafik/${props.aboutUsImg}")`};
    width: 17rem;
    height: 25rem;
    background-size: 107%;
    background-repeat: no-repeat;

    @media(max-width: 900px){
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

    @media(max-width: 900px){
      width: 14rem;
      height: 19.6rem;
    }

    @media(max-width: 610px){
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

    @media(max-width: 900px){
      width: 13.3rem;
      height: 18.9rem;
    }
  `,

  AboutBoxText: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
    width: 40%;

    @media(max-width: 900px){
      padding-left: 3rem;
      width: 45%;
    }

    @media(max-width: 610px){
      width: 100%;
      align-items: center;
    }
  `,

  TextWelcome: styled.div`
    font-family: "Sacramento";
    font-size: 4.3rem;
    color: #501c15;

    @media(max-width: 900px){
      font-size: 3.3rem;
    }
  `,

  AboutUs: styled.div`
    font-family: "Montserrat", sans-serif;
    line-height: 2.3rem;
    font-size: 1.3rem;
    padding: 0.7rem 0 2.7rem 0;

    @media(max-width: 900px){
      font-size: 1rem;
      padding: 0.7rem 0 1.4rem 0;
    }

    @media(max-width: 610px){
      text-align: center;
      width: 87%;
    }
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
    

    &: hover{
      box-shadow: 0.01rem 0.01rem 0.8rem #501c15;
    }

    @media(max-width: 900px){
      font-size: 2.3rem;
      width: 18rem;
      height: 3rem;
    }
  `,

  QuoteSection: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.8rem 0 3.5rem 0;
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 26rem;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  `,

  QuoteText: styled.div`
    font-family: "Sacramento";
    font-size: 2.3rem;
    text-align: center;
    padding-bottom: 1rem;
    width: 45%;

    @media(max-width: 900px){
      width: 80%;
    }
  `,

  QuoteAuthor: styled.div`
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
  `,

  Gallery: styled.div`
    flex-grow: 1;
    background-image: ${(props: GalleryProps) =>
      `url("http://localhost/Fafik/${props.galleryImage}")`};
    height: 92%;
    background-repeat: no-repeat;
    background-size: 98rem;
    background-position-y: 20%;
    position: relative;

    @media(max-width: 785px){
      height: 110%;
    }
  `,
  GalleryOpacity: styled.div`
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.14);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  GalleryFrame: styled.div`
    border-top: 0.07rem solid #ffffff;
    border-bottom: 0.07rem solid #ffffff;
    flex-grow: 1;
    height: 90%;
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
    padding: 2.5rem 0 1rem 0;
    font-weight: 500;
    text-shadow: 0.2rem 0.2rem 0.8rem #000000;

    @media(max-width: 785px){
      padding: 0 0 1rem 0;
    }
  `,

  Title: styled.div`
    color: ${(props: TitleProps) => props.color};
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 2.3rem;
    padding: 1rem 0;
    font-weight: 500;
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

  BlogSection: styled.div`
    background-color: #ebe3cd;
    flex-grow: 1;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 945px){
      height: 95%;
    }

    @media(max-width: 725px){
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
    height: 29rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 945px){
      height: 36rem;
    }

    @media(max-width: 725px){
      height: 44rem;
    }
  `,

  BlogRecentPosts: styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 0.6rem 0 2rem 0;

    // @media(max-width: 900px){
    //     justify-content: center;
    //     padding: 0.6rem 0 1.6rem 0;
    // }

    @media(max-width: 945px){
      flex-wrap: wrap;
      padding: 0 0 1rem 0;
    }
  `,

  BlogPost: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    @media(max-width: 1140px){
      padding: 0 1.5rem;
    }

    @media(max-width: 945px){
      padding: 0.7rem 0.5rem;
    }
  `,

  BlogPostPhoto: styled.div`
    background-image: ${(props: BlogPostProps) => props.backgroundImage};
    width: 20rem;
    height: 2.5rem;
    background-position-y: 52%;
    background-size: 100%;

    @media(max-width: 1140px){
        height: 3rem;
        width: 17rem;

    }
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

    @media(max-width: 945px){
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

  MapSection: styled.div`
    flex-grow: 1;
    height: 82%;
    display: flex;
    align-items: center;

    @media(max-width: 900px){
        height: 100%
    }
  `,

  MapCircle: styled.div`
    background-color: #dfd2ae;
    width: 28rem;
    height: 28rem;
    border-radius: 50%;

    @media(max-width: 900px){
      width: 24rem;
      height: 24rem;
    }
  `,

  MapTitleSubtitle: styled.div`
    @media(max-width: 900px){
      padding-right: 1rem;
    }
  `,

  MapTitle: styled.div`
    color: #000000;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.9rem;
    font-weight: 500;
    text-align: center;

    @media(max-width: 900px){
      font-size: 1.7rem;
    }
  `,

  MapSubtitle: styled.div`
    color: #000000
    font-family: "Sacramento";
    text-align: center;
    font-size: 2.1rem;
    line-height: 2.4rem;
    padding: 1.2rem;

    @media(max-width: 900px){
      font-size: 1.9rem;
    }
  `,

  MapTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 900px){
        flex-direction: row;
    }
  `,

  MapButtons: styled.div`
    display: flex;
    flex-direction: column;
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
    cursor: pointer;

    &: hover {
      background-color: #d8ccad;
    }

    @media(max-width: 900px){
      width: 19rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  `,

  MapPart1: styled.div`
    background-image: url("https://i.imgur.com/J8dP9fb.png");
    background-size: 40%;
    background-position: -19% 98%;
    background-repeat: no-repeat;
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;

    @media(max-width: 900px){
        width: 100%;
        justify-content: center;
    }
  `,

  MapPart2: styled.div`
    background-image: url("https://i.imgur.com/5PixXri.png");
    background-size: 47%;
    background-position: 124%;
    background-repeat: no-repeat;
    flex-grow: 3;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;

    @media(max-width:900px){
        width: 100%
        padding: 2rem 0;
        background-size: 33%;
        background-position: 119%;
        justify-content: space-around;
    }
    `,
  MapContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 70%;

    @media(max-width: 900px){
      flex-direction: column-reverse;
      width: 100%
    }
  `,

  EventPlanSection: styled.div`
    flex-grow: 1;
    height: 80%;
  `,

  PlanDecoration: styled.div`
    margin: -3.2rem 2rem;
  `,

  PlanDecorationImage: styled.img`
    width: 39rem;
  `,

  PlanHeader: styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1263px){
      flex-direction: column;
      align-items: center;
    };
  `,

  PlanHeaderText: styled.div`
    font-family: "Sacramento";
    font-size: 7.5rem;
    font-weight: 500;
    color: #683b35;
    transform: rotate(10deg);

    @media(max-width: 1383px){
      font-size: 6rem;
      transform: none;
    }
  `,

  PlanHeaderBox: styled.div`
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;
    padding: 5rem 5rem 2rem 0;

    @media(max-width: 1263px){
      padding: 2rem 0 1.5rem 0;
    };
  `,

  EventPlan: styled.div`
    display: flex;
    justify-content: center;
  `,

  EventElement: styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1215px){
        width: 20%;
    }
  `,

  EventTopElement: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -0.8rem;
    position: relative;
  `,

  EventIcon: styled.div`
    background-image: url("https://i.imgur.com/mWzbv7h.png");
    width: 9rem;
    height: 9rem;
    background-size: 100%;
    background-repeat: no-repeat;
  `,

  EventDot: styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: #ebe3cd;

    &: hover{
      background-color: #683B35;
    }
  `,

  EventBottomElement: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0.2rem solid #683b35;
    padding: 0 3rem;
  `,

  EventTime: styled.div`
    color: #b6947a;
    font-size: 2.8rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    padding-top: 1rem;
  `,

  EventName: styled.div`
    color: #683b35;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1rem;
    padding-top: 0.2rem;
    text-align: center;
  `,

  GiftSection: styled.div`
    flex-grow: 1;
    height: 60%;
    background-image: url("https://i.imgur.com/rzmxHCQ.png");
    background-size: 100rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
  `,

  GiftSectionFrame: styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    width: 82rem;
    height: 20rem;
    display: flex;
    justify-content: center;

    @media(max-width: 900px){
      width: 48rem;
      height: 23rem;
    }
  `,

  GiftSectionHeader: styled.div`
    font-family: "Sacramento";
    font-size: 4rem;
    font-weight: 500;
    color: #683b35;
    padding-top: 0.6rem;
  `,

  GiftRebuses: styled.div`
    display: flex;
  `,

  GiftRebus: styled.div``,

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
  `,

  MusicSectionFrame: styled.div`
    background-color: #ffffff;
    width: 74rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1400px){
      margin-top: -7rem;
      justify-content: flex-end;
      height: 23rem;
    }
}
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
    width: 66%;

    @media(max-width: 950px){
      font-size: 1.4rem;
    }
  `,

  MusicInputBox: styled.div`
    color: #683b35;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 1.2rem;

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
  `,

  MusicSectionButton: styled.div`
    display: flex;
    align-items: flex-end;
    padding-left: 2rem;
  `,

  AdditionalInfoSection: styled.div`
    flex-grow: 1;
    height: 80%;
    background-color: #726257;
    background-image: url("https://i.imgur.com/zNjU7AO.png");
    background-size: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1033px){
      height: 115%;
    }
  `,

  AdditionalInfoHeader: styled.div`
    color: #ffffff;
    font-family: "Sacramento";
    font-size: 4rem;
    padding-top: 2rem;
  `,

  AdditionalInformationsBox: styled.div`
    flex-grow: 1;
    padding: 2.5rem;

    @media(max-width: 1200px){
      padding: 2.5rem 0.7rem 1.2rem 0.7rem;
    }

    @media(max-width: 1033px){
      flex-grow: 0;
    }

  `,

  MainInformationBox: styled.div`
    display: flex;
  `,

  InformationIcon: styled.div`
    height: 3.2rem;
    width: 3.2rem;
    border: 0.4rem solid #ffffff;
    border-radius: 50%;
    display: flex;
  `,

  InformationTextBox: styled.div`
    padding: 1.1rem 0 0 1.1rem;
  `,

  TextBoxHeader: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-weight: 600;
    font-size: 1.8rem;
    padding-bottom: 0.9rem;
  `,

  TextBoxDescription: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 0.9rem;
    line-height: 1.7rem;
    font-weight: 500;
  `,

  AdditionalInfo: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 0.75rem;
    padding-top: 1rem;
    line-height: 1.3rem;
    font-weight: 200;
  `,

  AdditionalInformationsBoxes: styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1033px){
      flex-wrap: wrap;
      justify-content: center;
    }
  `,

  AdditionalInformationsDoubleLine: styled.div`
    width: 100%;
    padding-top: 1.3rem;
  `,

  DoubleLine: styled.div`
    border-bottom: 0.07rem solid #ffffff;
    border-top: 0.07rem solid #ffffff;
    flex-grow: 1;
    padding: 0.3rem;
    margin-top: 1.2rem;
  `,

  BottomInfoSection: styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-around;
    width: 59%;
    padding-top: 1.3rem;
    
    @media(max-width: 1360px){
      width: 72%;
    }
    
    @media(max-width: 1130px){
      width: 92%;
    }
    `,

  BottomInfoHeader: styled.div`
    display: flex;
    align-items: center;
  `,

  TextBoxHeaderBottom: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-weight: 600;
    font-size: 1.8rem;
    padding: 0 3rem 0 1.1rem;
  `,

  TextBoxDescriptionBottom: styled.div`
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.07rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 200;

    @media(max-width: 880px){
      font-size: 1.2rem;
    }
  `
};
