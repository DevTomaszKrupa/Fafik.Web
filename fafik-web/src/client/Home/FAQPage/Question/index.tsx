import React, { useState } from 'react';

import components from './styles';
import { FaqQuestion } from '../reducers';

type Props = {
  question: FaqQuestion;
};
const FAQPageQuestions = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { FaqSection, QuestionBox, AnswerBox } = components;

  return (
    <FaqSection>
      <QuestionBox isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
        {props.question.question}
      </QuestionBox>
      {isExpanded && <AnswerBox>{props.question.answer}</AnswerBox>}
    </FaqSection>
  );
};
export default FAQPageQuestions;
