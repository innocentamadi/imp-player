import * as types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import * as initialState from '../initialState';

export default function questionReducer(state = initialState.questions, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return storeHelpers.loadQuestions(state, action.questions);

    case types.LOAD_QUESTION_SUCCESS:
      return storeHelpers.updateQuestion(state, action.question);

    case types.UPDATE_QUESTION_SUCCESS:
      return storeHelpers.updateQuestion(state, action.question);

    default:
      return state;
  }
}
