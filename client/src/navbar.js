import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import skill from './Skills.png'

export default function Nav(){
    return(<>
      <div className="col-lg-12 bg-primary nave-home">
            <nav className="navbar navbar-expand-lg bg-primary   col-lg-12 ">
  <a class="navbar-brand" href="#"><img src={skill} height="70" width="80"/></a>
  <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item  active ml-5 ">
        <Link to="/"><button className="btn bg-primary text-white">Home</button></Link>
      </li>
    <li class="nav-item  active ml-5 ">
        <Link  to="/catageries"><button className="btn bg-primary text-white">catageries</button></Link>
      </li>
      <li class="nav-item  active  ml-5">
        <Link   to="/about"><button className="btn bg-primary text-white">About</button></Link>
      </li>
      <li class="nav-item active ml-5">
       <Link to="/vision"><button className="btn bg-primary text-white">Vision</button></Link>
      </li>
      <li class="nav-item active ml-5">
        <Link  to="/features"><button className="btn bg-primary text-white">Features</button></Link>
      </li>
      <li class="nav-item active ml-5">
       <Link  to="/form"><button className="btn bg-primary text-white">Form</button></Link>
      </li>
      <li class="nav-item active ml-">
        <Link to="/footer"><button className="btn bg-primary text-white">Contact Us</button></Link>
      </li>
      <li class="nav-item active ml-">
      <Link to="/user"><button className="btn bg-primary text-white">profile</button></Link>
      </li>
     
      
      
     
     
    </ul>
    
  </div>
</nav>
    

            </div>
    
    </>);
}