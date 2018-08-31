import React from 'react';
import Link from 'gatsby-link';
import './music.css';
import '../pages/index.css';
import RecordPlayer from '../svg/recordPlayer';


const musicData = {
  artCovers: [
      {
        id: 0,
        artReg: "https://image.ibb.co/k85PKe/BasReg.png",
        artBlur: "https://image.ibb.co/dvDBze/BasBlur.png",
      },
      {
        id: 1,
        artReg: "https://image.ibb.co/bGXtCz/AmineReg.png",
        artBlur: "https://image.ibb.co/bGmaQK/Amine_Blur.png",
      },
      {
        id: 2,
        artReg: "https://image.ibb.co/mdGaQK/MacReg.png",
        artBlur: "https://image.ibb.co/b6QPKe/MacBlur.png",
      },
      {
        id: 3,
        artReg: "https://image.ibb.co/cBEJee/Choker_Reg.png",
        artBlur: "https://image.ibb.co/ermWze/Choker_Blur.png",
      },
      {
        id: 4,
        artReg: "https://image.ibb.co/g55MXz/Ariana_Reg.png",
        artBlur: "https://image.ibb.co/mTcDee/Ariana_Blur.png",
      },
      {
        id: 5,
        artReg: "https://image.ibb.co/fAF25K/Goldlink_Reg.png",
        artBlur: "https://image.ibb.co/cpsh5K/Goldlink_Blur.png",
      },
      {
        id: 6,
        artReg: "https://image.ibb.co/fpQ25K/KeysReg.png",
        artBlur: "https://image.ibb.co/i9GmXz/KeysBlur.png",
      },
    ],
};



class Music extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    currentArt:  {
          id: 0,
          artReg: "https://image.ibb.co/k85PKe/BasReg.png",
          artBlur: "https://image.ibb.co/dvDBze/BasBlur.png",
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
                      <li><a onMouseOver={() => this.mouseOverHandler(0)} onTouchStart={() => this.mouseOverHandler(0)} href="https://open.spotify.com/track/0YAQnYt2oB8OdoaeqnHyTI?si=5G-GomybSFO7DpU18xK-uw">Tribe - Bas</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(1)} onTouchStart={() => this.mouseOverHandler(1)} href="https://open.spotify.com/track/5qHirGR7M9tdm6C17DlzSY?si=XW0i3hcoTEyA3zi_IHdUzQ">REEL IT IN - Amine </a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(2)} onTouchStart={() => this.mouseOverHandler(2)} href="https://open.spotify.com/track/2N4idqj9TT3HnH2OFT9j0v?si=Ch7GR2qcSfCNOAr5eUcEUw">Still Beating - Mac Demarco</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(3)} onTouchStart={() => this.mouseOverHandler(3)} href="https://open.spotify.com/track/4BNqWebyipWrMsupuTmKO9?si=tu6Vx8tWTG2B9YqpgfWU7A">Drift - Choker</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(4)} onTouchStart={() => this.mouseOverHandler(4)} href="https://open.spotify.com/track/7sPbp28sThpD4opAhQsMTx?si=wEmFPpaITtCKJCtXQ9mXlg">everytime - Ariana Grande</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(5)} onTouchStart={() => this.mouseOverHandler(5)} href="https://open.spotify.com/track/564oa00vY05d1uYnTEAAmE?si=u66_saBOROuAGDy9viSl8w">Herside Story - Goldlink</a></li>
                      <li><a onMouseOver={() => this.mouseOverHandler(6)} onTouchStart={() => this.mouseOverHandler(6)} href="https://open.spotify.com/track/39AS0BbUEoAwrBUo6vGUBD?si=FXFeTBQHSDq08GkwidjB7g">Blended Family - Alicia Keys</a></li>
                  </li>
                </ul>
          </div>
        </div>
      )

    }
}

export default Music
