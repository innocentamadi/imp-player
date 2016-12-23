import * as enums from '../../utils/enumsHelpers';
import assign from 'object-assign';

/* eslint-disable camelcase */

/**
 * @param {Object} state: current application state. Most likely empty though
 * @param {Object} questions object of questions (unserialized)
 * @return {object} new serialized proverb object
 */
export function loadQuestions(state, questions) {
  return assign({}, state, enums.serializeByKey(questions));
}

/**
 * @param {Object} questions object of questions currently in state
 * @param {Object} id of proverb to edit
 * @return {object} questions state with the specific proverb set to editing
 */
export function edit(questions, id) {
  return update(questions, questions[id], true);
}

/**
 * @param {Object} questions object of questions currently in state
 * @param {Object} updatedQuestion of proverb to edit
 * @param {Object} editing: Boolean to show if edit status is to be set to editing
 * @return {object} new serialized proverb object
 */
function update(questions, updatedQuestion, editing) {
  return enums.update(questions, updatedQuestion.id, updatedQuestion, editing);
}

/**
 * @param {Object} questions object of questions currently in state
 * @param {Object} proverb object with most recent updates
 * @return {object} state with updates having any editing status removed
 */
export function updateQuestion(questions, question) {
  return update(questions, assign({}, question, {editing: null}));
}
