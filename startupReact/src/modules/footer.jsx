import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer id="footer">
        <hr />
        <div className="footertext">
            <Link to="/login">Login</Link>
            <a href="https://github.com/jaxgardner/startup">Github</a>
        </div>
    </footer>
  );
};


export default Footer;