import React from 'react';
import Link from 'gatsby-link';
import './banner.css';
import AndrewWave from "../assets/andrewWave"
import ReactCursorPosition from 'react-cursor-position';
import {isBrowser} from 'react-device-detect';
import {isMobile} from 'react-device-detect';

class Banner extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

render() {
  return (
    <div>
      <div className="banner">
        <div className="frame">
        <ReactCursorPosition>
          <BannerText height={this.state.height} width={this.state.width}/>
        </ReactCursorPosition>
        </div>
      </div>

    </div>
  );
}

}

const BannerText = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 50,
      y = 0
    } = {}
  } = props;

  var circleXPos;
  var circleYPos;

  if (width < 800 && width > 501) {
     circleYPos = 200;
     circleXPos = -40;
  } else if(width < 500) {
    circleYPos = 0;
    circleXPos = -40;
  } else {
     circleYPos = 150;
     circleXPos = 30;
  }

  var style={
    top: y + circleYPos,
    left: x + circleXPos,
    cursor: "none"
  }


  

  return (
    <div className="waveContainer">
      {isMobile || props.height > 500 && props.width < 600 ? 
      [<AndrewWave className="andrewWave" />,
      <AndrewWave className="andrewWave" />,
      <AndrewWave className="andrewWave" />,
      <AndrewWave className="andrewWave" />,
      <AndrewWave className="andrewWave" />] :
      <AndrewWave className="andrewWave" />}
      {isActive || isTouchDetected && x > 100 && isBrowser ?      
      <svg className="circle" style={style} height="200" width="200">
      <circle cx="62.5" cy="62.5" r="50" fill="black" />
      </svg> : null}
    </div>
  );

}

export default Banner
