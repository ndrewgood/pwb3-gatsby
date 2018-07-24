import React from 'react';
import Link from 'gatsby-link';
import './recordPlayer.css';
import '../pages/index.css';

const RecordPlayer = (props) => (
  <div className="rpContainer">

    <div onClick={() => props.clicked()} className="rpCircle"></div>

    <div className="smallImage" style={{backgroundImage: 'url(' + props.artReg + ')'}}></div>

    <svg x="0px" y="0px"
	 viewBox="0 0 1035 848" className="Layer_2 rpFront">
    <g>
	     <circle className="st0" cx="413.5" cy="434.5" r="180"/>
	     <circle className="st0" cx="413.5" cy="434.5" r="161"/>
	      <line className="st0" x1="44.1" y1="619.4" x2="30" y2="619.4"/>
    </g>
  <g>
	     <rect x="961" y="131" transform="matrix(0.5817 -0.8134 0.8134 0.5817 295.9976 848.6098)" className="st0" width="24" height="11"/>
	     <path className="st0" d="M901.9,176.7c-22.9-16.4-31.7-43.3-19.7-60.2s24.5,7,29.7,8.3c1.9,0.5,17,15.8,16.5,21.6
		C928,152.1,924.8,193,901.9,176.7z"/>
		  <rect x="897.6" y="40.5" transform="matrix(0.5817 -0.8134 0.8134 0.5817 340.2931 817.6689)" className="st0" width="135" height="75"/>
		  <rect x="482.9" y="376.2" transform="matrix(0.5817 -0.8134 0.8134 0.5817 4.4049 785.0078)" className="st0" width="565" height="24"/>
	    <rect x="577" y="668.3" transform="matrix(0.8772 -0.4802 0.4802 0.8772 -256.0718 362.4518)" className="st0" width="7" height="27"/>
		  <rect x="903.4" y="80.1" transform="matrix(0.5817 -0.8134 0.8134 0.5817 273.6667 802.3423)" className="st0" width="27" height="110"/>
		  <rect x="546.4" y="605.1" transform="matrix(0.8772 -0.4802 0.4802 0.8772 -228.9809 364.9548)" className="st0" width="105" height="50"/>
	    <circle className="st0" cx="916.6" cy="135.5" r="8"/>
    	<path className="st1" d="M936.8,56.5"/>
    	<path className="st1" d="M922.8,76.1"/>
    	<line className="st1" x1="925.6" y1="78" x2="939.5" y2="58.5"/>
    	<line className="st1" x1="928.3" y1="80" x2="942.3" y2="60.5"/>
    	<line className="st1" x1="931.1" y1="82" x2="945" y2="62.4"/>
    	<line className="st1" x1="933.8" y1="83.9" x2="947.8" y2="64.4"/>
    	<line className="st1" x1="936.6" y1="85.9" x2="950.5" y2="66.4"/>
    	<line className="st1" x1="939.3" y1="87.9" x2="953.3" y2="68.3"/>
    	<line className="st1" x1="942.1" y1="89.8" x2="956" y2="70.3"/>
    	<line className="st1" x1="944.8" y1="91.8" x2="958.8" y2="72.3"/>
    	<line className="st1" x1="947.6" y1="93.8" x2="961.5" y2="74.2"/>
    	<line className="st1" x1="950.3" y1="95.7" x2="964.3" y2="76.2"/>
    	<line className="st1" x1="953.1" y1="97.7" x2="967" y2="78.2"/>
    	<line className="st1" x1="955.8" y1="99.7" x2="969.8" y2="80.1"/>
    	<line className="st1" x1="958.6" y1="101.6" x2="972.5" y2="82.1"/>
    	<line className="st1" x1="961.3" y1="103.6" x2="975.3" y2="84.1"/>
    	<line className="st1" x1="964.1" y1="105.6" x2="978" y2="86"/>
    	<line className="st1" x1="966.8" y1="107.5" x2="980.8" y2="88"/>
    	<line className="st1" x1="969.6" y1="109.5" x2="983.5" y2="90"/>
    	<line className="st1" x1="972.3" y1="111.5" x2="986.3" y2="91.9"/>
    	<line className="st1" x1="975.1" y1="113.4" x2="989" y2="93.9"/>
    	<line className="st1" x1="977.8" y1="115.4" x2="991.8" y2="95.9"/>
    	<path className="st1" d="M994.5,97.8"/>
    	<path className="st1" d="M980.6,117.4"/>
    </g>
  </svg>


    <div className="bigImage" style={{backgroundImage: 'url(' + props.artBlur + ')'}}></div>

    <svg id="Layer_2" x="0px" y="0px" viewBox="0 0 1035 848">
    <rect x="30.5" y="27.5" className="st0" width="976" height="787"/>
    <circle className="st0" cx="413.5" cy="434.5" r="413"/>
    <circle className="st0" cx="177.5" cy="65.5" r="18"/>
    <polyline className="st0" points="826.5,30 826.5,216.5 876.5,352.5 1004,352.5 "/>
    <circle className="st0" cx="892.5" cy="328.5" r="11"/>
    <circle className="st0" cx="958.5" cy="297.5" r="35"/>
    <circle className="st0" cx="986.5" cy="172.5" r="9"/>
    <line className="st0" x1="44.1" y1="619.4" x2="30" y2="619.4"/>
    <line className="st0" x1="781" y1="623.2" x2="1006" y2="623.2"/>
    <polygon className="st0" points="780.5,748.5 765.5,823.5 771.5,825.5 793.5,750.5 "/>
    <circle className="st0" cx="788.5" cy="740.5" r="15"/>
    <polygon className="st0" points="949.6,750 1015.2,789.3 1019.1,784.3 955.9,738.4 "/>
    <circle className="st0" cx="944.8" cy="739.7" r="15"/>
    <circle className="st0" cx="926.5" cy="676.5" r="8"/>
    <rect x="981.5" y="630.5" className="st0" width="12" height="33"/>
    <line className="st1" x1="993.5" y1="646.5" x2="981.5" y2="646.5"/>
    </svg>


  </div>




)

export default RecordPlayer
