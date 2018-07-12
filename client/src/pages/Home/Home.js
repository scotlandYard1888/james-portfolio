import React from "react";

import "./Home.css";



import zip from "./javascriptGame-master.zip";

import {Link} from "react-router-dom"


const Home = () => (
  <div className="home-page">

    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <br style = {{lineHeight: 8}}/>
        <h1 className="paragraph-header">Welcome!</h1>
          <br />
          <p>
              Greetings, and welcome to my website! I am a web developer and computer science graduate. My lifelong goal is to write apps and code that can serve both users and clients. Good code makes the world a better place!
          </p>
          <br />
           <p> While you're here, please take a moment to check out the following: </p>
           <li> Guestbook, implemented with MongoDB (Register <Link id="here" to="/signup">here</Link> for an account to make posts. Drop me a line!)</li>
           <li> <a href={zip} download="Protectron.zip">Protectron</a>, a game written for the HTML5 Canvas element. </li>
          <br />
          <p>
              - James Erickson
            </p>
        </div>



      </div>

    </div>
  </div>
)

export default Home;
