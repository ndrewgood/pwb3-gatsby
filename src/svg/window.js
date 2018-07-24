import React from 'react';
import Link from 'gatsby-link';
import './window.css';
import '../pages/index.css';

const Window = (props) => (
  <div>
        <div className="windowImg" style={{backgroundImage: 'url(' + props.picture + ')'}}></div>
    <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 423 341">
      <g>
      	<rect x="0.5" y="0.5" className="st0" width="422" height="340"/>
      	<path d="M422,1v339H1V1H422 M423,0H0v341h423V0L423,0z"/>
      </g>
      <g>
      	<line className="st1" x1="-0.5" y1="32.5" x2="422.5" y2="32.5"/>
      </g>
      <line className="st1" x1="390.5" y1="0.5" x2="390.5" y2="32.5"/>
      <line className="st1" x1="358.5" y1="1" x2="358.5" y2="33"/>
      <line className="st1" x1="326.5" y1="1" x2="326.5" y2="33"/>
      <line className="st1" x1="15" y1="15.5" x2="111" y2="15.5"/>
      <line className="st1" x1="411" y1="21" x2="402" y2="12"/>
      <line className="st1" x1="336.5" y1="16.5" x2="348.5" y2="16.5"/>
      <line className="st1" x1="411" y1="12" x2="402" y2="21"/>
      <rect x="373" y="12" className="st1" width="6" height="6"/>
      <rect x="370" y="15" className="st2" width="6" height="6"/>
      <g>

      </g>
    </svg>

  </div>




)

export default Window
