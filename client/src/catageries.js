import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import StarRatings from 'react-star-ratings'


export default function Category(){
    const[employee,setemployee]=useState([])
    useEffect(()=>{
         fetch("http://localhost:3000/profile.json")
         .then(res=>res.json())
         .then(data=>setemployee(data))


    },[])



   return(<>
   <div className="container-fluid">
        <div className="row">
            
                {
                    employee.map((value,index)=>(
                        <div className="col-lg-4 mt-2">
                        <div class="card bg-primary">
                      <img class="card-img-top cata-img" src={value.img} height="200px" width="400px" alt="Card image cap"/>
                      <h5 class="card-text text-white">{value.desgnation}</h5>
                      
                      <span><h6 class="card-title text-white">{value.user_name}</h6><StarRatings rating={value.rating} starDimension="15px" starSpacing="10px" starRatedColor="gold"/></span>  
                      </div></div>))}
                      </div>
                      </div>
    







                        
                          
                     
                      
               
       

      
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>);
}