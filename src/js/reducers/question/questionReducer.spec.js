import expect from 'expect';
import questionReducer from './questionReducer';
import * as actions from '../../actions/questionActions';

describe('Question Reducer Test', () => {
  it('should load questions when passed LOAD_QUESTIONS_SUCCESS', () => {
    const initialState = {};
    const questions = [
      {id: 1},
      {id: 2}
    ];
    const expectedState = {
      1: {id: 1},
      2: {id: 2}
    };
    const action = actions.loadQuestionsSuccess(questions);

    // action
    const newState = questionReducer(initialState, action);

    // assertion
    expect(newState).toEqual(expectedState);
  });

  it("should add a new question when passed UPDATE_QUESTION_SUCCESS" +
    " if question doesn't already exist in store", () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const newQuestion = {id: 'C'};

    const action = actions.updateQuestionSuccess(newQuestion);

    // action
    const newState = questionReducer(initialState, action);
    expect(Object.keys(newState).length).toEqual(3);
    expect(newState[1].id).toEqual(1);
    expect(newState[2].id).toEqual(2);
  });

  it('should update question when passed UPDATE_QUESTION_SUCCESS', () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const question = {id: 2, labor_cost: 34};
    const action = actions.updateQuestionSuccess(question);

    // action
    const updatedState = questionReducer(initialState, action);

    // assertions
    expect(Object.keys(updatedState).length).toEqual(2);
    expect(updatedState[question.id].labor_cost).toEqual(34);
  });
});
