import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'application/store/reducers';

import { useDocumentTitle } from 'application/shared';

import components from './styles';
import Footer from '../../HomeFooter';
import PageTitleBar from 'client/PageTitleBar';
import FaqQuestions from './Question';

const FAQPage = () => {
  useDocumentTitle('FAQ - Miłość Wierność');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FAQ_PAGE_GET_QUESTIONS_STARTED' });
  }, []);

  const faqPageState = useSelector((state: AppState) => state.faqPageState);
  const { questions } = faqPageState;

  const {} = components;

  return (
    <Fragment>
      <PageTitleBar title="FAQ - NAJCZĘŚCIEJ ZADAWANE PYTANIA" />
      {questions.map(question => (
        <FaqQuestions question={question}></FaqQuestions>
      ))}
      <Footer />
    </Fragment>
  );
};
export default FAQPage;
