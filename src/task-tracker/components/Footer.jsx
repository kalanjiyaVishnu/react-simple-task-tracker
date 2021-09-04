import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='dis-flex'>
      <h6>version 1.0.0.1</h6>
      <Link to="/about">about</Link>
    </div>
  );
};
export default Footer;
