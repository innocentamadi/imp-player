import * as types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';

let initialState = {};

export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_CURRENT_QUESTION_SUCCESS:
            const {question} = action;
            return {...state, ...question};

        default:
            return state;
    }
}
