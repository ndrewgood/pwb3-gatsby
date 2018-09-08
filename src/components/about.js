import React from 'react';
import Link from 'gatsby-link';
import '../pages/index.css';
import './about.css';



const About = () => (
      <div className="row">
    <div className="block first l">
      <div className="picFrame p1"><div className="pfImg"></div></div>
      <div className="picFrame p2"><div className="pfImg"></div></div>
      <div className="picFrame p3"><div className="pfImg"></div></div>
      <div className="picFrame p4"><div className="pfImg"></div></div>
      <div className="picFrame p5"><div className="pfImg"></div></div>
      <div className="picFrame p6"><div className="pfImg"></div></div>
  </div>
  <div className="block r">
    <div className="line"></div>
    <div className="line"></div>

    <div className="header"><h1><span>——</span> about</h1></div>
    <ul className="list">
      <li>18 years old</li>
      <li>from West Chester, PA</li>
      <li>currently interested in learning web development/UX Design</li>
      <li>Enrolled at <a href="https://www.scad.edu/">scad</a></li>
    </ul>

  </div>
  </div>
)

export default About
