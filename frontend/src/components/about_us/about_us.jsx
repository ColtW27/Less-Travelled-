import React from 'react';
class AboutUs extends React.Component {
  render(){
    return(
    <div className="outer-about-container">
      <div className="title-container">
            <h1>Meet the Team</h1> 
      </div>
        <div className= "about-us-container">
          <div className="about-us-team-item grow">
            <div>
                <img src="../../../Colt_profile.JPG" alt="Colt Profile Picture"/>
                  <h2>Colton Wilmouth</h2>
                  <h3>Team Lead</h3>
                  <ul>
                <li><a href="https://www.linkedin.com/in/colton-wilmouth-80b507132/" target="_blank">Linked In</a></li>
                <li><a href="https://coltw27.github.io/" target="_blank">Portfolio</a></li>
                <li><a href="https://github.com/ColtW27" target="_blank">Github</a></li>
                <li><a href="https://angel.co/u/colton-wilmouth" target="_blank">Angellist</a></li>
                  </ul>
            </div>
          </div>

                <div className="about-us-team-item grow">
            <div>
                <img src="../../../Colt_profile.JPG" alt="Colt Profile Picture"/>
                  <h2>Rahul Jain</h2>
                  <h3>Flex</h3>
                 <ul>
                <li><a href=""target="_blank">Linked In</a></li>
                <li><a href=""target="_blank">Portfolio</a></li>
                <li><a href=""target="_blank">Github</a></li>
                <li><a href=""target="_blank">Angellist</a></li>
                  </ul>
            </div>
          </div>

                <div className="about-us-team-item grow">
            <div>
                <img src="../../../Colt_profile.JPG" alt="Colt Profile Picture"/>
                  <h2>Carl Godlewski</h2>
                  <h3>Front End Lead</h3>
                <ul>
                <li><a href=""target="_blank">Linked In</a></li>
                <li><a href=""target="_blank">Portfolio</a></li>
                <li><a href=""target="_blank">Github</a></li>
                <li><a href=""target="_blank">Angellist</a></li>
                  </ul>
            </div>
          </div>

                <div className="about-us-team-item grow">
            <div>
                <img src="../../../Colt_profile.JPG" alt="Colt Profile Picture"/>
                  <h2>Jon Romero</h2>
                  <h3>Back End Lead</h3>
                  <ul>
                <li><a href=""target="_blank">Linked In</a></li>
                <li><a href=""target="_blank">Portfolio</a></li>
                <li><a href=""target="_blank">Github</a></li>
                <li><a href=""target="_blank">Angellist</a></li>
                  </ul>
            </div>
          </div>
      </div>
    </div>
        )
    }

}

export default AboutUs;