import React, { Component } from 'react';
import Type from "./Type";
import ParticleBackground from './ParticleBackground';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
               </ul>
            </nav>
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm <font color="#11ABB0">{name}</font>.</h1>
                  <h2>My interests are</h2>
                  <h2 className="type-writer"><Type /></h2>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
            <ParticleBackground />
         </header>
      );
   }
}

export default Header;
