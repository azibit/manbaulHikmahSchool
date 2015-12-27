import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'
import HeaderNavigation from './HeaderNavigation.jsx';
import HeaderSlider from './HeaderSlider.jsx';
import MoreDescription from './MoreDescription.jsx';
import Footer from './Footer.jsx';





class App extends React.Component {
  render () {
    return (
    	<div>
    	<div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#home" className="brand-logo"><h4>Manbaul Hikmah Private Schools</h4></a>
        <ul className="right hide-on-med-and-down">
          <li>
          <a href="#home">Home</a>
          </li>
          <li><a href="#assurance">What We Assure You</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a className="waves-effect waves-light btn " href="#contact">Contact Us</a></li>
        </ul>
      </div>

    </nav>
  </div>

  		<div id = "home">
    	<HeaderSlider/>
    	</div>

    	<h3 className = "center animated zoomIn" id = "myDiv">Do you need a School to build your child the Islamic Way</h3>

    	<div id="introduction" className = "container row col s3 section scrollspy animated zoomIn">
    	<MoreDescription icon_name = "schedule" header = "Physically" body = "The term motor development refers to physical growth, 
    	or growth in the ability of children to use their bodies and physical skills. 
    	Motor development often has been defined as the process by which a
    	 child acquires movement patterns and skills.s"/>


    	<MoreDescription icon_name = "loyalty" header = "Mentally" body = "Mental Developments are the progressive 
    		changes and improvements during mental maturation.
			As an individual grows and develops, mental development supports 
				the growth of their cognitive abilities."/>


    	<MoreDescription icon_name = "assessment" header = "Spiritually" body = "Spot trends and changes in students’ behaviour and attendance to make early corrections"/>
    	</div>

    	<div className = "container" id="assurance">

    	<h3 className = "center animated fadeInLeftBig" >What We Assure You</h3>
    	 <ul className="collapsible" data-collapsible="accordion">
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>Conducive learning Environment</div>
      <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">place</i>A Shariah Compliant And Sunnah Based Rulings</div>
      <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">place</i>World Class Facilities</div>
      <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
  </ul>
    	</div>


    	<div id = "facilities" className = "center row col s3">


    		<br/>
    		<h3 className = "center animated jello" id = "Facilities ">Some of our Facilities</h3>

    		<img className="responsive-img circle " width = "250" height  = "150" src="img/image2.jpg"/>
    		<img className="responsive-img circle" width = "250" src="img/image3.jpg"/>

    	</div>

    	<div id = "contact" className = "container">
    		<h3 className = "center" id = "Facilities ">Contact Us</h3>
    		<p className="flow-text card-panel teal lighten-2">
    			<blockquote>Address:</blockquote> Along Rukpoku Road, Eliozu, Port Harcourt, Rivers State<br/>
    			<blockquote>Phone:</blockquote> +2348037398622 <br/>
    			<blockquote>Email:</blockquote> manbaulikmah@gmail.com
    		</p>
    	</div>

    	<Footer/>
    	

 	 </div>);
  }
}

render(<App/>, document.getElementById('app'));