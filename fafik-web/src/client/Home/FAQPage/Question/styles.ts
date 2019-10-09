import styled from 'styled-components';

interface QuestionBoxProps {
  isExpanded: boolean;
}

export default {
  FaqSection: styled.div`
    font-family: 'Josefin Sans';
    letter-spacing: 0.1rem;
  `,

  QuestionBox: styled.div`
    flex-grow: 1;
    background-color: #fdfbfd;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    padding: 1.3rem 0 1.2rem 5rem;
    margin: 0.2rem;
    color: #253535;

    ${(props: QuestionBoxProps) => props.isExpanded && `color: #909F88; background-color: #FEFEFE;`}
  `,

  AnswerBox: styled.div`
    font-size: 1.09rem;
    padding: 1rem 0 2rem 6.6rem;
    line-height: 1.7rem;
    width: 59%;
  `,
};
