import React from 'react';
import Option from './option';

const Question = ({question}) => {
  const {options} = question
  return (
    <div className="question">
      <div className="content">
        <p>{question.content}</p>
      </div>
      {options && options.map(option => <Option key={option.id} {...{option}} />)}
    </div>
);
}
export default Question;
