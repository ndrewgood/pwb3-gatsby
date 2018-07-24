import React from 'react';
import Link from 'gatsby-link';
import './music.css';
import '../pages/index.css';
import RecordPlayer from '../svg/recordPlayer';


const musicData = {
  artCovers: [
      {
        id: 0,
        artReg: "https://image.ibb.co/jMtkpJ/History_Reg.jpg",
        artBlur: "https://image.ibb.co/h9w5pJ/History_Blur.jpg",
      },
      {
        id: 1,
        artReg: "https://image.ibb.co/nPWGwy/Ghost_Town_Reg.jpg",
        artBlur: "https://image.ibb.co/cNurUJ/Ghost_Town_Blur.jpg",
      },
      {
        id: 2,
        artReg: "https://image.ibb.co/nnnOby/Travels_Reg.jpg",
        artBlur: "https://image.ibb.co/hPfLOd/Travels_Blur.jpg",
      },
      {
        id: 3,
        artReg: "https://image.ibb.co/hgK89J/Forever_Always_Reg.jpg",
        artBlur: "https://image.ibb.co/kd1zGy/Forever_Always_Blur.jpg",
      },
      {
        id: 4,
        artReg: "https://image.ibb.co/bvYJ9J/Soiree_Reg.jpg",
        artBlur: "https://image.ibb.co/dBMS3d/Soiree_Blur.jpg",
      },
      {
        id: 5,
        artReg: "https://image.ibb.co/dSsT9J/Fallingwater_Reg.jpg",
        artBlur: "https://image.ibb.co/bzQn3d/Fallingwater_Blur.jpg",
      },
      {
        id: 6,
        artReg: "https://image.ibb.co/bKTUGy/Total_Entertainment_Forever_Reg.jpg",
        artBlur: "https://image.ibb.co/hqiJ9J/Total_Entertainment_Forever_Blur.jpg",
      },
    ],
};



class Music extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    currentArt:  {
          id: 0,
          artReg: "https://lh4.googleusercontent.com/dbxGXGs_FOtC9Sm4EB8k1QAhru0a0J9sAAiT161xsQO9H7oQMhq0Hksb5SqdlZkVERN_dYp5VaTA8_Bh2xx8=w1922-h950",
          artBlur: "https://lh5.googleusercontent.com/eG3XHfQ4AjiKKiPwXH3pJpehJ1gUjsQOPEjBF9LxxnPPZQYzeHTmQaxE4BnQgbhv_wGhtWO3UggDJxkwEvct=w1922-h950",
        }
    }
  };

  mouseOverHandler = (index) => {

    const art = musicData.artCovers[index]

    this.setState({ currentArt: art});
  };

  clickedHandler = () => {
    const num = this.state.currentArt.id + 1;
    if (num == 6) {
      this.setState({ currentArt: musicData.artCovers[0]});
    } else {
    const clickArt = musicData.artCovers[num];

    this.setState({ currentArt: clickArt});
  }
  }


    render() {
      return (
        <div className="row newRow">
          <div className="block l">
            <div className="rpcContainer">
              <RecordPlayer artReg={this.state.currentArt.artReg} artBlur={this.state.currentArt.artBlur} clicked={this.clickedHandler}/>
            </div>
          </div>
          <div className="block r"><div className="line"></div>
              <div className="line"></div>
                <div className="header"><h1 onClick={this.clickedHandler}><span>——</span> music</h1></div>
                <ul className="list musicList">
                    <li id="musicLi">Heres a short list of some of my favorite songs recently:
                      <li><a onMouseOver={() => this.mouseOverHandler(0)} onTouchStart={() => this.mouseOverHandler(0)} href="https://open.spotify.com/track/4TwVtW8hS5LyLoDtJGpUOg?si=jdNztOIVTqWMGKVUn-ZqqQ">History - 88rising</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(1)} onTouchStart={() => this.mouseOverHandler(1)} href="https://open.spotify.com/track/6Bg7MznA9X0dIhlAsLyBYj?si=Gv2eEDpqT9i6HBI9Be_3bw">Ghost Town - Kanye West</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(2)} onTouchStart={() => this.mouseOverHandler(2)} href="https://open.spotify.com/track/1WPevIqr6oWsA4BWwMhkW5?si=V5f2cmkFTRiDOO0atwJZZg">Travels - khai dreams</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(3)} onTouchStart={() => this.mouseOverHandler(3)} href="https://open.spotify.com/track/4B2kIC5F0kSVfTD5crzgm9?si=ku_jmFVRS9CpIjnDxYNm0Q">Forever Always - Peter CottonTale</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(4)} onTouchStart={() => this.mouseOverHandler(4)} href="https://open.spotify.com/track/0IqnMcKFgtMaxdsSZaQDAo?si=1Q2pS78-RA67xBDCPFGlqw">Soirée - Last Night In Paris</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(5)} onTouchStart={() => this.mouseOverHandler(5)} href="https://open.spotify.com/track/11r8xMuVTS66RjtYgLneRw?si=Kd4eTSwdQYKsC0AozmXAjw">Fallingwater - Maggie Rogers</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(6)} onTouchStart={() => this.mouseOverHandler(6)} href="https://open.spotify.com/track/10tS3AWz8aUWArbnxIrUL6?si=BAOwojXJTliJQB55tYeHYQ">Total Entertainment Forever - Father John Misty</a></li>
                  </li>
                </ul>
          </div>
        </div>
      )

    }
}

export default Music
