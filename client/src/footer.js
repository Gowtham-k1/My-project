import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from "react-icons/fi";

export function Footer(){
    return(
        <>
        <div className="container-fluid p-5 total">
            <div className="row">
                <div className="col-lg-1"/>
                <div className="col-lg-3 skills">
                <p className="tfirst">We Are Skills point</p>
                <p className="first">This is the skillers or skilled person finding platform to do our projects.This platform will very helpfull for project giver & project searcher</p>
                </div>
                

                <div className="col-lg-4 loc ">

                <p className="tsecond">Location</p>
                <p className="second1">Plot No:824&826, Ram Nagar South, 3rd Main Road, Saravanam patti, Coimbatore - 600091, Tamilnadu,India </p>
                <p className="second2">+91-44-4856-3345</p>
                <p className="second3">@skillspoint.in</p>
                <p className="second4">www.skillspoint.in</p>
                </div>
                

                <div className="col-lg-3 gtouch">
                    <p className="tthird">Get In Touch</p>
                    <p className="third">Keep in touch to committed for your better future, committed for your better freedom</p>
                    <p className="allicons"><FiFacebook className="icons"></FiFacebook><FiInstagram className="icons"></FiInstagram><FiTwitter className="icons"></FiTwitter><FiLinkedin className="icons"></FiLinkedin></p>
                
                </div>
                <div className="col-lg-1"/>
            </div>

        </div>
        </>
    );
}