import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './menu.css';
import Cult from './cultu.jpeg';
import Admin from './admin.jpeg';
import Eng from './engineer.jpeg';
import Law from './law.jpeg';


export default function Home(){
    return(
    <>
     <div className="container-fluid backg">
        <div className="row">
           
            <div className="col-lg-2">
            &nbsp;

            </div>
            <div className="col-lg-8 mt-5 ">
                <h2 className="mt-5 text-white">ALL the skilled persons you  need, in one place </h2>
                <h3 className="ml-5 text-white">search and find the best skilled one you need </h3>

            </div>
            <div className="col-lg-2">
            &nbsp;</div>
            <div className="col-lg-2"> &nbsp; </div>
            <div className="col-lg-7 mt-5 ml-5">
   
            <form class="form-inline my-2 my-lg-0">
            <div class="dropdown mr-3">
  <button class="btn bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Full stack developer</a>
    <a class="dropdown-item" href="#">web developer</a>
    <a class="dropdown-item" href="#">Back end developer</a>
  </div>
</div>

      <input class="form-control mr-sm-2 col-9 " type="search" placeholder="Search all skills " aria-label="Search" />
    
    </form>
            </div>
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-1">&nbsp;</div>
            <div className="col-lg-12 mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-2 ml-2">
                  <div>
                    <div class="card">
                    <div class="card-body">
                      <img src={Cult} className='cult'/>
                    </div>
                    </div>
                     <p class="text-white ml-3">cultural</p>
                     </div></div>
                     <div className="col-lg-2 ml-2">
                  <div>
                    <div class="card">
                    <div class="card-body">
                      <img src={Admin} className='cult'/>
                    </div>
                    </div>
                     <p class="text-white ml-3">administration</p>
                     </div></div>
                     <div className="col-lg-2 ml-2">
                  <div>
                    <div class="card">
                    <div class="card-body">
                      <img src={Law} className='cult'/>
                    </div>
                    </div>
                     <p class="text-white ml-3">law</p>
                     </div></div> 
                     <div className="col-lg-2 ml-2  ">
                  <div>
                    <div class="card">
                    <div class="card-body">
                      <img src={Eng} className='cult'/>
                    </div>
                    </div>
                     <p class="text-white ml-3">enginerring</p>
                     </div></div>
                     <div className="col-lg-2">
                  <div>
                    <div class="card">
                    <div class="card-body">
                      <img src={Cult} className='cult'/>
                    </div>
                    </div>
                     <p class="text-white ml-3">cultural</p>
                     </div></div>
                    
                     
 
   
   

                    

                </div>
            </div>
          

            

        </div>

     </div>
    
    
    
    
    
    
    
    
    </>);

}

