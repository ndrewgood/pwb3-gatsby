import React from 'react';
import Link from 'gatsby-link';
import Banner from '../components/banner';
import About from '../components/about';
import Projects from '../components/projects';
import Music from '../components/music';
import Contact from '../components/contact';
import './index.css';


const IndexPage = () => (
  <div className="container">
      <Banner />

        <About />

        <Projects />

        <Music />

        <Contact />
      <div className="row footer">
          <p>c 2018 andrew goodridge <br></br><a href="https://github.com/andrewg8/pwb3-gatsby/blob/master/README.md">about the site</a></p>

      </div>
  </div>
)

export default IndexPage
