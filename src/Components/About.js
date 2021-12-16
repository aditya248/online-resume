import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var resumeDownload = "documents/" + this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="four columns">
                  <img className="profile-pic" src={profilepic} />
               </div>
               <div className="eight columns main-col">
                  <h2>About Me</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{bio}</p>
                  <div className="row">
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
