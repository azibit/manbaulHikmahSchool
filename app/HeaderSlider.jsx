import React from 'react';
import {render} from 'react-dom';


import HeaderNavigation from './HeaderNavigation.jsx';
class HeaderSlider extends React.Component {
  render () {
    return (

      <div>

        <div className="slider">

    <ul className="slides center">
      <li>
        <img src="img/image5.jpg"/> 
        
      </li>
      <li>
        <img src="img/image4.jpg"/>
      </li>
      <li>
        <img src="img/image7.jpg"/> 
        
      </li>
      <li>
        <img src="img/iamge8.jpg"/> 
        
      </li>
    </ul>
  </div>
  </div>);
  }
}

export default HeaderSlider;