import * as types from './actionTypes';
import webAPI from '../utils/webAPI';

export function loadQuestionsSuccess (questions) {
  return {type: types.LOAD_QUESTIONS_SUCCESS, questions}
}

export function loadQuestionSuccess (question) {
  return {type: types.LOAD_QUESTION_SUCCESS, question}
}

export function loadCurrentQuestionSuccess (question) {
  return {type: types.LOAD_CURRENT_QUESTION_SUCCESS, question}
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
    return webAPI(`/questions`, 'GET', '')
      .then(res => dispatch(loadQuestionsSuccess(res)))
  }
}

export function loadQuestion(id) {
  return dispatch => {
    return webAPI(`/questions/${id}`, 'GET', '')
      .then(res => dispatch(loadQuestionsSuccess(res)))
  }
}

export function loadCurrentQuestion(id, nav) {
  return dispatch => {
    return webAPI(`/questions/${id}/${nav}`, 'GET', '')
  .then(res => dispatch(loadCurrentQuestionSuccess(res)))
  }
}
