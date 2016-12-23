import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/questionActions';
import Question from './Question';

export class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {viewedQuestions: []}
    this.prevQuestion = this.prevQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const {currQuestion, actions} = this.props;
    this.props.actions.loadCurrentQuestion(currQuestion.id, 'next');
  }
  prevQuestion() {
    const {currQuestion, actions} = this.props;
    this.props.actions.loadCurrentQuestion(currQuestion.id, 'previous');
  }

  render() {
    return (
      <Question
        question={this.props.currQuestion}
        nextQuestion={this.nextQuestion}
        prevQuestion={this.prevQuestion} />
    );
  }
}

Question.propTypes = {
  questions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions.all,
    currQuestion: state.questions.current
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
