import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import components from './styles';

const PricingPage = () => {
  const dispatch = useDispatch();
  const featureListState = useSelector((state: any) => state.featureListState);

  useEffect(() => {
    dispatch({ type: 'FEATURE_LIST_GET_DATA_STARTED' });
  }, []);

  const { PricingPlans, PricingPlan, PricingTitle, Subtitle, PlanDescription, PlanSavings, PlanPrice } = components;

  return (
    <PricingPlans>
      <PricingPlan colorVersion="pink">
        <PricingTitle colorVersion="pink">
          abonament
          <Subtitle>miesięczny</Subtitle>
        </PricingTitle>
        <PlanDescription></PlanDescription>
        <PlanSavings></PlanSavings>
        <PlanPrice colorVersion="pink">{featureListState.price}zł/mies.</PlanPrice>
      </PricingPlan>

      <PricingPlan colorVersion="gray">
        <PricingTitle colorVersion="gray">
          abonament
          <Subtitle>półroczny</Subtitle>
        </PricingTitle>
        <PlanDescription></PlanDescription>
        <PlanSavings></PlanSavings>
        <PlanPrice colorVersion="gray">{featureListState.price * 6 - featureListState.halfYearDiscount}zł</PlanPrice>
      </PricingPlan>

      <PricingPlan colorVersion="green">
        <PricingTitle colorVersion="green">
          abonament
          <Subtitle>roczny</Subtitle>
        </PricingTitle>
        <PlanDescription></PlanDescription>
        <PlanSavings></PlanSavings>
        <PlanPrice colorVersion="green">{featureListState.price * 12 - featureListState.yearDiscount}zł</PlanPrice>
      </PricingPlan>
    </PricingPlans>
  );
};
export default PricingPage;
