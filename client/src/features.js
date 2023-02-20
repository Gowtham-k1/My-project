import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './feature.css'



export default function Feature(){
    const[empfea,setempfea]=useState([])
    useEffect(()=>{
         fetch("http://localhost:3000/features.json")
         .then(res=>res.json())
         .then(data=>setempfea(data))


    },[]
    )

    return(
        <>
        <div className="container-fluid">
            <div className="row mt-4">
                {
                    empfea.map((value,index)=>(
                        <div className="col-lg-4  ">
                        <div class="card feature-card features-border">
                        <img class="card-img-top" src={value.image} alt="Card image cap"/>
                        <div class="card-body ">
                          <h5 class="card-title text-center">{value.text}</h5>
                          <p class="card-text feature-para">{value.content}</p>
                          
                        </div>
                      </div>
                      </div>
                    ))
                }

            </div>

        </div>
        
      
        
        
        
        
        
        
    
        
        </>
    );
}
        
        
        
        
        
        
        
  