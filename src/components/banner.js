import React from 'react';
import Link from 'gatsby-link';
import './banner.css';
import posed, { PoseGroup } from 'react-pose';




const circleConfig = {
  circleVisible: { scale: 1, opacity: 1, transition: { duration: 300 }},
  circleHidden: { scale: 0, opacity: 1, transition: { duration: 300 }},
}

const textConfig = {
  open: {y: 20, delayChildren: 100, staggerChildren: 50},
  closed: {y: 0, delay: 500, staggerChildren: 20}};

const lettersConfig = {
  open: { opacity: 1, y: -10 },
  closed: { opacity: 0, y: 50 }
};

const Circle = posed.circle(circleConfig);
const Text = posed.h1(textConfig);
const Letters = posed.div(lettersConfig);





class Banner extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    circleIsVisible: true,
    textIsVisible: false,
    text: ["a", "n", "d", "r", "e", "w", " ", "g", "o", "o", "d", "r", "i", "d", "g", "e"]
  };
}

animationHandler = () => {
  this.setState((prevState, props) => {
    return {
      circleIsVisible: !prevState.circleIsVisible
    };
  });

  setTimeout(() => {
    this.setState((prevState, props) => {
      return {
        circleIsVisible: !prevState.circleIsVisible
      };
    })
  }, 3000);

  this.setState((prevState, props) => {
    return {
      textIsVisible: !prevState.textIsVisible
    };
  });

  setTimeout(() => {
    this.setState((prevState, props) => {
      return {
        textIsVisible: !prevState.textIsVisible
      };
    })
  }, 2500);
  }


//click circle, animation state set on, interval for like 3 seconds, circle comes back.
//also when click circle, another animation waits 1 second to play, name comes up

render() {



  return (
    <div>
      <div className="banner">
        <div className="frame">
          <ul className="Nav">
          {/*  <li><a className="navAbout">about</a></li>
            <li><a href="">projects</a></li>
            <li><a href="">music</a></li>
            <li><a className="navContact" href="">contact</a></li> */}
          </ul>
          <Text className="bannerName" pose={this.state.textIsVisible ? 'open' : 'closed'}>
            {this.state.text.map((x,i) => <Letters key={i}>{x}</Letters>)}
          </Text>
          <svg className="animeSvg"><Circle className="animeCircle" cx="50" cy="50" r="40" fill="white" pose={this.state.circleIsVisible ? 'circleVisible' : 'circleHidden'} onClick={this.animationHandler}  /></svg>
            <div className="frameImg">
                <div className="img"></div>
            </div>
        </div>
      </div>

    </div>
  );
}

}

export default Banner
