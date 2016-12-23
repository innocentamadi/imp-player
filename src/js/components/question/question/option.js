import React from 'react'
import { Link } from 'react-router'

const Option= ({option}) => {
  return (
    <div className="option">
      <input type="checkbox" value={`Option ${option.content}`} />
      <label class="checkbox-inline">{option.content}</label>
    </div>
  );
}
export default Option;
