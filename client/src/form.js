import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";
import form from "./form.png";

export function Form(){
    return(
        <>
        <div className="container p-4">
        <div className="container-fluid ">
          <p className="text-center title"><span className="text-primary">Unlock</span> your skills and get project works and jobs</p>
            <div className="content row p-4">
            
            <div className="col-lg-8 text-left">
                <br/>
                 <p className="instruction">Fill your skills to find some projects and jobs to expand your knowledge</p>
          
                <div className="row fields">
               <br/>
               
                <div className="col-lg-3" >
                    <label >Field/category<span className="colon">:</span></label>
                    </div>
                    <div className="col-lg-9 mt-2">

                <input type="text" className="form-control"/>
                </div>
                </div>



                <br/><div className="row">
               <br/>
                <div className="col-lg-3">
                    <label >Skills<span className="colon2">:</span></label>
                    </div>
                    <div className="col-lg-9 mt-2">

                <input type="text" className="form-control"/>
                </div>
                </div>


                <br/><div className="row">
               <br/>
                <div className="col-lg-3">
                    <label >Projects<span className="colon3">:</span></label>
                    </div>
                    <div className="col-lg-9">

                <input type="text" className="form-control"/>
                </div>
                </div>

                <br/><div className="row">
               <br/>
                <div className="col-lg-3">
                    <label >Yours Strength<span className="colon4">:</span></label>
                    </div>
                    <div className="col-lg-9">

                <input type="text" className="form-control"/>
                </div>
                </div>

                <br/><div className="row">
               <br/>
                <div className="col-lg-3">
                    <button className="btn btn-primary">Register</button>
                </div>
                </div>

            </div>
            <div className="col-lg-4">
        <img className="image" src={form}/>
            </div>

            </div>

        </div>
        </div>
        
        </>
    );
}