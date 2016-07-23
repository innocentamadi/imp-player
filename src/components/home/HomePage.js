import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>React + Bootstrap + Errors + Test tutorial by Cent</h1>
        <p>Setting up development environment, routing and tests</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        <Link to="contact" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
     )
   }
 }
 export default HomePage
