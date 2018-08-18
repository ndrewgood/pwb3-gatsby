import React from 'react';
import Link from 'gatsby-link';
import Window from '../svg/window';
import '../pages/index.css';
import './projects.css';


const windowsData = {
  windows: [
    { id: "0",
      window1: "https://preview.ibb.co/fSdGDd/oldweb2.png",
      window2: "https://preview.ibb.co/mMoGDd/oldweb3.png",
      window3: "https://image.ibb.co/h8i56y/oldweb1.png" },
    { id: "1",
      window1: "https://images.unsplash.com/photo-1532128687411-528a85f8af03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=411175c808e8e030a03b302de27dd809&auto=format&fit=crop&w=500&q=60",
      window2: "https://images.unsplash.com/24/11843368213_6c58b49694_b.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9c52526c12abcb67c1ed8a147256b1f&auto=format&fit=crop&w=500&q=60",
      window3: "https://images.unsplash.com/photo-1455052642859-f8449866e500?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d26ebcff2c2def7e05bf4f9106483d81&auto=format&fit=crop&w=500&q=60" },
    { id: "2",
      window1: "https://images.unsplash.com/photo-1532119663789-58252470755c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=090a1f1074f3df462abb541d93c08315&auto=format&fit=crop&w=1349&q=80",
      window2: "https://images.unsplash.com/photo-1495471547134-98698271c52a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=edeb1740f47925655069ae7f2d60e1d5&auto=format&fit=crop&w=500&q=60",
      window3: "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e543d307ae464c76cb0de88a278293d7&auto=format&fit=crop&w=500&q=60" }
  ],
};

let int = 0;


class Projects extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    currentProject: {
        id: "0",
        window1: "https://preview.ibb.co/fSdGDd/oldweb2.png",
        window2: "https://preview.ibb.co/mMoGDd/oldweb3.png",
        window3: "https://image.ibb.co/h8i56y/oldweb1.png"
      }
    }
  };



  mouseOverHandler = (index) => {

    const project = windowsData.windows[index]

    this.setState({ currentProject: project});
  };




  render() {



    return (
      <div className="row newRow">
        <div className="block l">
          <div className="windowDiv wd1"><Window picture={this.state.currentProject.window1}/></div>
          <div className="windowDiv wd2"><Window picture={this.state.currentProject.window2}/></div>
          <div className="windowDiv wd3"><Window picture={this.state.currentProject.window3}/></div>
        </div>
        <div className="block r">
          <div className="line"></div>
          <div className="line"></div>

            <div className="header"><h1><span>——</span> projects</h1></div>
            <ul className="list">
                <li><a onMouseOver={() => this.mouseOverHandler(0)} onTouchStart={() => this.mouseOverHandler(0)} className="pLink" href="https://github.com/andrewg8/pwb2">My old website</a><li onMouseOver={() => this.mouseOverHandler(0)} onTouchStart={() => this.mouseOverHandler(0)}>the first website I made. other projects coming soon...</li></li>
                {/*<li><a onMouseOver={() => this.mouseOverHandler(1)} onTouchStart={() => this.mouseOverHandler(1)} className="pLink">Example project 2</a><li onMouseOver={() => this.mouseOverHandler(1)} onTouchStart={() => this.mouseOverHandler(1)}>A quick description about this</li></li>
                <li><a onMouseOver={() => this.mouseOverHandler(2)} onTouchStart={() => this.mouseOverHandler(2)} className="pLink">Example project 3</a><li onMouseOver={() => this.mouseOverHandler(2)} onTouchStart={() => this.mouseOverHandler(2)}>A quick description about this</li></li> */}
            </ul>

        </div>
      </div>
    );
  }
}

export default Projects
