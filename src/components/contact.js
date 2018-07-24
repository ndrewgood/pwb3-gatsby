import React from 'react';
import Link from 'gatsby-link';
import '../pages/index.css';
import './contact.css';
import Globe from '../svg/globe';


const colorData = {
  colors: [
      {
        id: 0,
        color: "#8134AF",
      },
      {
        id: 1,
        color: "#24292e",
      },
      {
        id: 2,
        color: "#1DB954",
      },
      {
        id: 3,
        color: "#FFFC00",
      },
      {
        id: 4,
        color: "#DD4B39",
      },
    ],
};


class Contact extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    currentColor: {
      id: 0,
      color: "#8134AF",
      },
    }
  };

  mouseOverHandler = (index) => {
    const color = colorData.colors[index]

    this.setState({ currentColor: color});
  }

  clickedHandler = () => {
    const num = this.state.currentColor.id + 1;
    if (num == 4) {
      this.setState({ currentColor: colorData.colors[0]});
    } else {
    const clickColor = colorData.colors[num];

    this.setState({ currentColor: clickColor });
  }
  }

  render() {
    return (
      <div className="row newRow">
        <div className="block l">
          <div className="globeDiv">
            <Globe color={this.state.currentColor.color} clicked={this.clickedHandler}/>
          </div>
        </div>

        <div className="block r">
            <div className="line"></div>
            <div className="line"></div>

              <div className="header"><h1><span>——</span> find me</h1></div>
              <ul class="list contact">
                <li><a onMouseOver={() => this.mouseOverHandler(0)} onTouchStart={() => this.mouseOverHandler(0)} href="https://www.instagram.com/ndrewgood/">Instagram</a></li>
                <li><a onMouseOver={() => this.mouseOverHandler(1)} onTouchStart={() => this.mouseOverHandler(1)} href="https://github.com/andrewg8">Github</a></li>
                <li><a onMouseOver={() => this.mouseOverHandler(2)} onTouchStart={() => this.mouseOverHandler(2)} href="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=6v4EpqxYS-euz_-s5dFevA">Spotify</a></li>
                <li><a onMouseOver={() => this.mouseOverHandler(3)} onTouchStart={() => this.mouseOverHandler(3)} href="https://image.ibb.co/i8u9zJ/snapchatcode.png">Snapchat</a></li>
                <li><a onMouseOver={() => this.mouseOverHandler(4)} onTouchStart={() => this.mouseOverHandler(4)} href="mailto:hey@ndrewgood.com">Email</a></li>
              </ul>

      </div>
      </div>
    )
  }
}

export default Contact
