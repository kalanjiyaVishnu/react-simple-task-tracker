import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <span>&copy; 2021</span>
      <Link to="/">home</Link>
    </div>
  );
};
export default About;
