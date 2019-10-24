import styled from 'styled-components';

interface PlanProps {
  colorVersion: string;
}

export default {
  PricingPlans: styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 10rem;
  `,

  PricingPlan: styled.div`
    width: 20rem;
    border-radius: 0 0 2rem 2rem;

    ${(props: PlanProps) =>
      props.colorVersion === 'pink' &&
      `
      border: 0.25rem solid #f2d0be;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'gray' &&
      `
      border: 0.25rem solid #CEC9C1;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'green' &&
      `
      border: 0.25rem solid #859A7A;
    `}
  `,

  PricingTitle: styled.div`
    background-color: #fdfbfd;
    color: #000000;
    font-family: 'DM Serif Text';
    letter-spacing: 0.04rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.1rem 0 1rem 0;

    ${(props: PlanProps) =>
      props.colorVersion === 'pink' &&
      `
      border-bottom: 0.25rem solid #f2d0be;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'gray' &&
      `
      border-bottom: 0.25rem solid #CEC9C1;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'green' &&
      `
      border-bottom: 0.25rem solid #859A7A;
    `}
  `,

  Subtitle: styled.div`
    font-family: 'DM Serif Text';
    letter-spacing: 0.04rem;
    font-size: 2.5rem;
    margin-top: -0.6rem;
  `,

  PlanDescription: styled.div`
    font-family: 'Montserrat';
    letter-spacing: 0.04rem;
    height: 11rem;
    display: flex;
    justify-content: center;
  `,

  PlanSavings: styled.div`
    background-color: #fdfbfd;
    height: 10%;
    height: 2.6rem;
  `,

  PlanPrice: styled.div`
    font-family: 'DM Serif Text';
    letter-spacing: 0.04rem;
    color: #ffffff;
    font-size: 2.4rem;
    height: 4.4rem;
    border-radius: 0 0 1.6rem 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props: PlanProps) =>
      props.colorVersion === 'pink' &&
      `
      background-color: #f2d0be;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'gray' &&
      `
      background-color: #CEC9C1;
    `}
    ${(props: PlanProps) =>
      props.colorVersion === 'green' &&
      `
      background-color: #859A7A;
    `}
  `,
};
