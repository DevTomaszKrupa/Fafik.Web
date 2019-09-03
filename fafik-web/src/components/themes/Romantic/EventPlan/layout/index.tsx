import React, { Fragment } from 'react';

import components from './EventPlan.styles';
import { RomanticState } from '../../../../../store/romantic/theme/reducers';

type Props = {
  romanticState: RomanticState;
};

const EventPlanLayout = (props: Props) => {
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

  const { } = props.romanticState;

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
          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot data-tip="Zapraszamy na uroczystość do Kościoła św. Anny w Kazimierzu Dolnym." />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>

          <EventElement>
            <EventTopElement>
              <EventIcon />
              <EventDot />
            </EventTopElement>
            <EventBottomElement>
              <EventTime>16:00</EventTime>
              <EventName> Uroczystość zaślubin </EventName>
            </EventBottomElement>
          </EventElement>
        </EventPlan>
      </EventPlanSection>

      <Tooltip />
    </Fragment>
  );
};

export default EventPlanLayout;
