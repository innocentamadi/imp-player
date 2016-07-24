import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>Fun test app</h1>
        <p>Figure out how you could make this page more beautiful . . . or add other pages :)</p>
        <div className="btn-group">
          <Link to="about" className="btn btn-primary btn-lg">About page</Link>
          <Link to="contact" className="btn btn-default btn-lg">Contact Us</Link>
        </div>
       </div>
     )
   }
 }
 export default HomePage
