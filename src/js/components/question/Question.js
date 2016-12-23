import React from 'react'
import { Link } from 'react-router'
import QuestionContent from './question/content';

const Question = ({question, prevQuestion, nextQuestion}) => {


  return (
    <div>
      <div className="jumbotron">
        <h1>Questions</h1>
        <p>Pick a question from the list</p>
      </div>
      <QuestionContent question={question} />
      <Link to="/" className="btn btn-default btn-lg">{'Home'}</Link>
      <button onClick={prevQuestion} className="btn btn-default btn-lg">{'< Previous'}</button>
      <button onClick={nextQuestion}  className="btn btn-primary btn-lg">{'Next >'}</button>
    </div>
  );
 }
 export default Question;
