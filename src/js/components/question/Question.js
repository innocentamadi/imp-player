import React from 'react'
import { Link } from 'react-router'

const Question = ({questions}) => {

  let questionList = [];
  for(let question in questions) {
    questionList.push(<p>question-content</p>)
  }
  return (
    <div className="jumbotron">
      <h1>Questions</h1>
      <p>Here will contain a list of all the questions</p>
      {questionList}
      <Link to="/" className="btn btn-default btn-lg">{'< Back home'}</Link>
    </div>
  );
 }
 export default Question;
