import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import StarRatings from 'react-star-ratings'
import { Link } from "react-router-dom";
export default function User(){
      
    const[employee,setemployee]=useState([])
    useEffect(()=>{
         fetch("http://localhost:3000/profile.json")
         .then(res=>res.json())
         .then(data=>setemployee(data))


    },[]
    )
       
    return(<>
      <div className="container-fluid">
        <div className="row">
            
                {
                    employee.map((value,index)=>(
                        <div className="col-lg-4 ">
                        <div class="card">
                      <Link to={`/profile/${value.id}`}> <img class="card-img-top" src={value.img} height="200px" width="400px" alt="Card image cap"/></Link> 
                        <h1><StarRatings rating={value.rating} starDimension="25px" starSpacing="25px" starRatedColor="gold"/></h1>
                        <div class="card-body">
                          <h5 class="card-title text-success">{value.user_name}</h5>
                          <p class="card-text text-primary">{value.desgnation}</p>
                           <p className="card-text">{value.location}</p>
                        </div>
                      </div>
                      </div>
                    )   

                    )
                   
                }

            </div>

       

      </div>
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    );
}