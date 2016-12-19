import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>Questions app</h1>
        <p>Figure out if you can get these questions answered!</p>
        <div className="btn-group">
          <Link to="about" className="btn btn-primary btn-lg">About page</Link>
          <Link to="question" className="btn btn-default btn-lg">View Questions</Link>
        </div>
       </div>
     )
   }
 }
 export default HomePage;
