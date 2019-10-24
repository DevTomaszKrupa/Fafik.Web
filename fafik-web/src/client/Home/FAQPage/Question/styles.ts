import styled from 'styled-components';

interface QuestionBoxProps {
  isExpanded: boolean;
}

export default {
  FaqSection: styled.div``,

  QuestionBox: styled.div`
    flex-grow: 1;
    background-color: #fdfbfd;
    font-weight: 700;
    cursor: pointer;
    padding: 1.3rem 0 1.2rem 5rem;
    margin: 0.2rem;
    color: #3e4b39;
    font-family: 'DM Serif Text';
    font-size: 1.25rem;
    letter-spacing: 0.06rem;

    ${(props: QuestionBoxProps) => props.isExpanded && `color: #909F88; background-color: #FEFEFE;`}
  `,

  AnswerBox: styled.div`
    padding: 0.7rem 0 2rem 6.6rem;
    line-height: 1.7rem;
    width: 63%;
    color: #253535;
    font-family: 'Montserrat';
    font-weight: 500;
    letter-spacing: 0.03rem;
    font-size: 1.05rem;
  `,
};
