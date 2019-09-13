import React, { Fragment } from 'react';

import components from './styles';
import { RomanticPlanProps } from '../../models';


const EventPlanLayout = (props: RomanticPlanProps) => {
  const {
    EventPlanSection,
    PlanDecoration,
    PlanDecorationImage,
    PlanHeader,
    PlanHeaderBox,
    PlanHeaderText,
    EventPlan,
    EventElement,
    EventBottomElement,
    EventTopElement,
    EventIcon,
    EventDot,
    EventTime,
    EventName,
    Tooltip,
  } = components;

  const { events } = props;

  return (
    <Fragment>
      <EventPlanSection>
        <PlanHeader>
          <PlanDecoration>
            <PlanDecorationImage src="https://i.imgur.com/7ykWG81.png" />
          </PlanDecoration>
          <PlanHeaderBox><PlanHeaderText> plan wydarzenia </PlanHeaderText></PlanHeaderBox>
        </PlanHeader>
        <EventPlan>
          {events.map(event =>
            <EventElement>
              <EventTopElement>
                <EventIcon />
                <EventDot data-tip={event.tooltip} />
              </EventTopElement>
              <EventBottomElement>
                <EventTime>{event.time}</EventTime>
                <EventName> {event.name} </EventName>
              </EventBottomElement>
            </EventElement>)}
        </EventPlan>
      </EventPlanSection>

      <Tooltip />
    </Fragment>
  );
};

export default EventPlanLayout;
