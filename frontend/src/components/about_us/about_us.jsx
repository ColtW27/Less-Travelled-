import React from 'react';

class AboutUs extends React.Component {
  render(){
    return(
    <div>
      <div className="title-container">
            <h1>Meet the Team</h1> 
      </div>
        <div className= "about-us-container">
          <div className="about-us-team-item">
            <div>
                  <h2>Colton Wilmouth</h2>
                  <h3>Team Lead</h3>
                  <ul>
                <li><a href="https://www.linkedin.com/in/colton-wilmouth-80b507132/">Linkedin</a></li>
                <li><a href="">AngelList</a></li>
                <li><a href="https://coltw27.github.io/">Portfolio</a></li>
                <li><a href="https://github.com/ColtW27">Github</a></li>
                  </ul>
            </div>
          </div>

          <div className="about-us-team-item">
            <div>
                  <h2>Rahul Jain</h2>
                  <h3>Flex</h3>
                  <ul>
                <li><a href="https://www.linkedin.com/in/rahul-jain-ny/">Linkedin</a></li>
                <li><a href="">AngelList</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Github</a></li>
                  </ul>
            </div>
          </div>

          <div className="about-us-team-item">
            <div>
                  <h2>Carl Godlewski</h2>
                  <h3>Front End Lead</h3>
                  <ul>
                <li><a href="https://www.linkedin.com/in/carl-godlewski-b64b0512/">Linkedin</a></li>
                <li><a href="https://angel.co/u/carl-godlewski">AngelList</a></li>
                <li><a href="https://cgodl.github.io/">Portfolio</a></li>
                <li><a href="https://github.com/CGodl/">Github</a></li>
                  </ul>
            </div>
          </div>

          <div className="about-us-team-item">
            <div>
                  <h2>Jon Romero</h2>
                  <h3>Back End Lead</h3>
                  <ul>
                <li><a href="https://www.linkedin.com/in/jonathan-romero-ab325a165/">Linkedin</a></li>
                <li><a href="https://angel.co/u/jonathan-romero-3">AngelList</a></li>
                <li><a href="https://Duskstone.github.io">Portfolio</a></li>
                <li><a href="https://github.com/duskstone">Github</a></li>
                  </ul>
            </div>
          </div>
      </div>
    </div>
        )
    }

}

export default AboutUs;