import React from 'react'
import { Link } from 'react-router'

class ContactUs extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>Contact Us</h1>
        <p>Please fill the form below to contact us</p>
        <Link to="/" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
     )
   }
 }
 export default ContactUs
