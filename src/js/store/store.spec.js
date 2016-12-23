//import expect from 'expect';
//import {createStore} from 'redux';
//import rootReducer from '../reducers';
//import initialState from '../reducers/initialState';
//import * as questionActions from '../actions/questionActions';
//
//describe('Store', () => {
//  it('should load in an array of questions', () => {
//    // arrange
//    const store = createStore(rootReducer, initialState);
//    const questions = [
//      {id: "A1023"},
//      {id: "A1024"}
//    ];
//
//    // act
//    const action = questionActions.loadquestionsSuccess(questions);
//    store.dispatch(action);
//
//    // assert
//    const questionsInStore = store.getState().questions;
//    expect(Object.keys(questionsInStore).length).toEqual(2);
//    expect(questionsInStore[questions[0].id]).toEqual(questions[0]);
//  });
//
//  it('should handle creating questions', () => {
//    // arrange
//    const store = createStore(rootReducer, initialState);
//    const question = {id: "A1023"};
//
//    // act
//    const action = questionActions.updatequestionSuccess(question);
//    store.dispatch(action);
//
//    // assert
//    const newState = store.getState().questions;
//    expect(newState[question.id].id).toEqual(question.id);
//  });
//});
