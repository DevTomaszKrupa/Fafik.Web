import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export default {
  EventPlanSection: styled.div`
    flex-grow: 1;
    padding-bottom: 3rem;
  `,

  PlanDecoration: styled.div`
    margin: -3.2rem 2rem;

    @media (max-width: 650px) {
      margin: -2.2rem 2rem;
    }
  `,

  PlanDecorationImage: styled.img`
    width: 39rem;

    @media (max-width: 650px) {
      width: 27rem;
    }
  `,

  PlanHeader: styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1263px) {
      flex-direction: column;
      align-items: center;
    }
  `,

  PlanHeaderText: styled.div`
    font-family: 'Sacramento';
    font-size: 7.5rem;
    font-weight: 500;
    color: #683b35;
    transform: rotate(10deg);

    @media (max-width: 1383px) {
      font-size: 6rem;
      transform: none;
    }

    @media (max-width: 610px) {
      font-size: 4.7rem;
    }
  `,

  PlanHeaderBox: styled.div`
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;
    padding: 5rem 5rem 2rem 0;

    @media (max-width: 1263px) {
      padding: 2rem 0 1.5rem 0;
    }
  `,

  EventPlan: styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      width: 77%;
    }

    @media (max-width: 610px) {
      width: 27%;
    }
  `,

  EventElement: styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1215px) {
      width: 20%;
    }

    @media (max-width: 800px) {
      flex-direction: row;
    }
  `,

  EventTopElement: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -0.8rem;
    position: relative;

    @media (max-width: 800px) {
      flex-direction: row;
      margin-bottom: 0;
      margin-right: -0.8rem;
    }
  `,

  EventIcon: styled.div`
    background-image: url('https://i.imgur.com/mWzbv7h.png');
    width: 52%;
    height: 10rem;
    background-size: 100%;
    background-repeat: no-repeat;

    @media (max-width: 1215px) {
      height: 7rem;
    }

    @media (max-width: 900px) {
      height: 5.7rem;
    }

    @media (max-width: 800px) {
      width: 6.5rem;
      height: 100%;
      margin-right: 0.7rem;
    }
  `,

  EventDot: styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: #ebe3cd;

    &: hover {
      background-color: #683b35;
    }
  `,

  Tooltip: styled(ReactTooltip)`
    &.type-dark.place-top {
      background-color: #ebe3cd;
      padding: 0.3rem 1rem;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.1rem;
      color: #683b35;
      padding: 0.7rem;
      width: 26%;

      @media (max-width: 570px) {
        width: 60%;
      }

      &:after {
        border-top-color: #ebe3cd;
      }
    }
  `,

  EventBottomElement: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0.2rem solid #683b35;
    padding: 0 3rem;

    @media (max-width: 800px) {
      border-top: none;
      border-left: 0.2rem solid #683b35;
      padding: 0 0 0 3rem;
      height: 7rem;
      align-items: flex-start;
    }
  `,

  EventTime: styled.div`
    color: #b6947a;
    font-size: 2.8rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    padding-top: 1rem;

    @media (max-width: 1215px) {
      font-size: 2.5rem;
    }

    @media (max-width: 900px) {
      font-size: 2.3rem;
    }
  `,

  EventName: styled.div`
    color: #683b35;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1rem;
    padding-top: 0.2rem;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 0.9rem;
    }

    @media (max-width: 800px) {
      width: 12rem;
    }
  `,
};
