import * as types from './actionTypes';
import webAPI from '../utils/webAPI';

export function loadQuestionsSuccess (questions) {
  debugger;
  return {type: types.LOAD_QUESTIONS_SUCCESS, questions}
}

export function loadQuestionSuccess (question) {
  return {type: types.LOAD_QUESTION_SUCCESS, question}
}

export function updateQuestionSuccess (question) {
  return {type: types.UPDATE_QUESTION_SUCCESS, question}
}

export function loadQuestions() {
  return dispatch => {
    return webAPI(`/questions`, 'GET', '')
      .then(res => dispatch(loadQuestionsSuccess(res)))
  }
}

export function updateQuestions() {
  return dispatch => {
    return webAPI(`/question`, 'GET', '')
      .then(res => dispatch(loadQuestionsSuccess(res)))
  }
}

export function loadQuestion() {
  return dispatch => {
    return webAPI(`/question`, 'GET', '')
      .then(res => dispatch(loadQuestionsSuccess(res)))
  }
}
