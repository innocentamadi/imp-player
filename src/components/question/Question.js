import React from 'react'
import { Link } from 'react-router'

class ContactUs extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>Contact Us</h1>
        <p>Contact who? There's no one here :(</p>
        <Link to="/" className="btn btn-default btn-lg">{'< Back home'}</Link>
       </div>
     )
   }
 }
 export default ContactUs
