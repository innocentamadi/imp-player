import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="contact" activeClassName="active">Contact Us</Link>
    </nav>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header;
