import React from 'react';
class AboutUs extends React.Component {
  render(){
    return(
    <div className="outer-about-container">
      <div className="title-container">
        <h1>Meet the Team</h1> 
      </div>
      <div className= "about-us-container">
        <div className="about-us-team-item colt grow">
          <div>
            <img src="../../../Colt_profile.JPG" alt="Colt Profile "/>
              <h2>Colton Wilmouth</h2>
              <h3>Team Lead</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/colton-wilmouth-80b507132/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://coltw27.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/ColtW27" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://angel.co/u/colton-wilmouth" target="_blank" rel="noopener noreferrer">Angellist</a></li>
            </ul>
          </div>
        </div>

        <div className="about-us-team-item rahul grow">
          <div>
            <img src="../../../rahul_jain.jpeg" alt="Rahul Profile"/>
              <h2>Rahul Jain</h2>
              <h3>Flex</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/rahul-jain-ny/"target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://rahulj93.github.io/"target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/rahulj93"target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://angel.co/u/rahul-jain-ny"target="_blank" rel="noopener noreferrer">Angellist</a></li>
            </ul>
          </div>
        </div>
        
        <div className="about-us-team-item carl grow">
          <div>
            <img src="../../../Carl_profile.JPG" alt="Carl Profile"/>
              <h2>Carl Godlewski</h2>
              <h3>Front End Lead</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/carl-godlewski-b64b0512/"target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/carl-godlewski" target="_blank" rel="noopener noreferrer">AngelList</a></li>
              <li><a href="https://cgodl.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/CGodl/" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </div>
        </div>

        <div className="about-us-team-item jon grow">
          <div>
            <img src="../../../Jon_profile.jpeg" alt="Jon Profile"/>
              <h2>Jon Romero</h2>
              <h3>Back End Lead</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/jonathan-romero-ab325a165/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/jonathan-romero-3" target="_blank" rel="noopener noreferrer">AngelList</a></li>
              <li><a href="https://Duskstone.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/duskstone" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        )
    }

}

export default AboutUs;