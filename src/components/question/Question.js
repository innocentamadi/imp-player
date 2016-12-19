import React from 'react'
import { Link } from 'react-router'

class Question extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>Questions</h1>
        <p>Here will contain a list of all the questions</p>
        <Link to="/" className="btn btn-default btn-lg">{'< Back home'}</Link>
       </div>
     )
   }
 }
 export default Question;
