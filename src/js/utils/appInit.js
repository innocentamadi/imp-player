import * as questionActions from '../actions/questionActions.js';

export function loadData(store) {
  store.dispatch(questionActions.loadCurrentQuestion(0, 'next'));
}
