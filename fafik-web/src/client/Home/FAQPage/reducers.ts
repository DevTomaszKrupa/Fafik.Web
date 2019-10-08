import { Reducer } from 'redux';
import { Action } from 'application/store/actions';

export type FaqQuestion = {
  faqQuestionId: number;
  question: string;
  answer: string;
};

export type FaqPageState = {
  questions: FaqQuestion[];
  isLoading: boolean;
};

const initialState: FaqPageState = {
  questions: [],
  isLoading: false,
};

export const faqPageState: Reducer<FaqPageState, Action> = (state = initialState, action: Action): FaqPageState => {
  switch (action.type) {
    case 'FAQ_PAGE_GET_QUESTIONS_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'FAQ_PAGE_GET_QUESTIONS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
      };
    case 'FAQ_PAGE_GET_QUESTIONS_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
