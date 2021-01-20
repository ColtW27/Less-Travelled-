import React from 'react';

class AboutUs extends React.Component {
  render(){
    return(
      <div className="about-us-background-container ">

         {/* <div className="title-container">
        <h1>Meet the Team</h1> 
      </div> */}
      




      <div className= "about-us-container">

        <div className="about-us-polaroid colt grow">
          <div>
            <img src="../../../Colt_profile.JPG" alt="Colt Profile "/>
              <h2>Team Lead</h2>
              <h3>Colton Wilmouth</h3>
            <ul className='polaroid-links-list'>
              <li><a href="https://coltw27.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/ColtW27" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/colton-wilmouth-80b507132/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/colton-wilmouth" target="_blank" rel="noopener noreferrer">AngelList</a></li>
            </ul>
          </div>
        </div>

        <div className="about-us-polaroid rahul grow">
          <div>
            <img src="../../../rahul_jain.jpeg" alt="Rahul Profile"/>
              <h2>Flex</h2>
              <h3>Rahul Jain</h3>
            <ul className='polaroid-links-list'>
              <li><a href="https://rahulj93.github.io/"target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/rahulj93"target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/rahul-jain-ny/"target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/rahul-jain-ny"target="_blank" rel="noopener noreferrer">AngelList</a></li>
            </ul>
          </div>
        </div>
        
        <div className="about-us-polaroid carl grow">
          <div>
            <img src="../../../Carl_profile.JPG" alt="Carl Profile"/>
              <h2>Front End Lead</h2>
              <h3>Carl Godlewski</h3>
            <ul className='polaroid-links-list'>
              <li><a href="https://cgodl.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/CGodl/" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/carl-godlewski-b64b0512/"target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/carl-godlewski" target="_blank" rel="noopener noreferrer">AngelList</a></li>
            </ul>
          </div>
        </div>

        <div className="about-us-polaroid jon grow">
          <div>
            <img src="../../../Jon_profile.jpeg" alt="Jon Profile"/>
              <h2>Back End Lead</h2>
              <h3>Jon Romero</h3>
            <ul className='polaroid-links-list'>
              {/* <li><a href="https://Duskstone.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a></li> */}
              <li><a href="https://github.com/duskstone" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/jonathan-romero-ab325a165/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://angel.co/u/jonathan-romero-3" target="_blank" rel="noopener noreferrer">AngelList</a></li>
            </ul>
          </div>
        </div>


      </div>

      </div>
        )
    }

}

export default AboutUs;


     