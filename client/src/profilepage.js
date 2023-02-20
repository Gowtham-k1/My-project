import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './profile.css';
import { Link, useParams } from 'react-router-dom';







export default function Profile() {
    const { id } = useParams();
    const [name, setname] = useState('')
    const [role, setrole] = useState('')
    const [age, setage] = useState('')
    const [level, setlevel] = useState('')
    const [skills, setskills] = useState('')
    const [projects, setprojects] = useState('')
    const [work, setwork] = useState('')
    const [status, setstatus] = useState('')
    const [location, setlocation] = useState('')
    const [profilesum, setprofilesum] = useState('')
    const [workexp, setworkexp] = useState('')
    const [music, setmusic] = useState('')
    const [fuelspot, setfuelspot] = useState('')
    const [tourist, settourist] = useState('')
    const [firstcol, setfirstcol] = useState('')
    const [secondcol, setsecondcol] = useState('')
    const [thirdcol, setthirdcol] = useState('')
    const [fourthcol, setfourthcol] = useState('')

    useEffect(() => {
        console.warn(id);
        fetch("http://localhost:3002/getdetails/" + id)
            .then((response) => response.json())
            .then((response) => {
                setname(response[0].name);
                setrole(response[0].role);
                setage(response[0].age);
                setlevel(response[0].level);
                setskills(response[0].skills);
                setprojects(response[0].projects);
                setwork(response[0].work)
                setstatus(response[0].status);
                setlocation(response[0].location);
                setprofilesum(response[0].profilesum);
                setworkexp(response[0].workexp);
                setmusic(response[0].music);
                setfuelspot(response[0].fuelspot);
                settourist(response[0].tourist);
                setfirstcol(response[0].firstcol);
                setsecondcol(response[0].secondcol);
                setthirdcol(response[0].thirdcol);
                setfourthcol(response[0].fourthcol);
            })
    }, []);

    return (

        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-12 backimg-profile">


                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="row fields">
                                    <br />

                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Name<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={name} />
                                    </div>

                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Role<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light " value={role} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Age<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={age} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label >level<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={level} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light">Skill<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={skills} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Projects<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={projects} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Work<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={work} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light" >Status<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={status} />
                                    </div>
                                    <div className="col-lg-3" >
                                        <label className="bg-light">Location<span className="colon">:</span></label>
                                    </div>
                                    <div className="col-lg-9 mt-3">

                                        <input type="text" className="form-control bg-light" value={location} />
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5">
                                <div className="mt-5">
                                    <h3>profile summary</h3>
                                    <p>{profilesum} </p>

                                </div>
                                <div className="">
                                    <h3>Work experience</h3>
                                    <p>{workexp}</p>

                                </div>
                                <div>
                                    <h1>projects</h1>
                                    <ol>
                                        <li className="text-danger content-size">{fuelspot}</li>
                                        <li className="text-danger content-size">{music}</li>
                                        <li className="text-danger content-size">{tourist}</li>


                                    </ol>
                                </div>
                                <div>
                                    <h1>Familiar With</h1>
                                    <ul>
                                        <li className="text-danger content-size">{firstcol}</li>
                                        <li className="text-danger content-size">{secondcol}</li>
                                        <li className="text-danger content-size">{thirdcol}</li>
                                        <li className="text-danger content-size">{fourthcol}</li>

                                    </ul>
                                </div>
                                <div>
                                    <div class="card w-100">
                                        <div class="card-body bg-primary">

                                            <p class="card-text text-center text-white">Do you want contact detaills of him? </p>
                                            <div className="text-center">
                                                <a href="#" class="btn bg-white ml-2">login</a> <a href="#" class="btn btn-primary ml-5">Sign up</a></div>
                                        </div>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </div>


                </div>

            </div>























        </>)
}