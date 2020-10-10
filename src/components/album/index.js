import React from "react";
import "./style.css";
import Schoolgle from '../../Assets/LandingPage.png';
import MusicQuiz from '../../Assets/MusicQuizDemo.gif';
import WorkScheduler from '../../Assets/CaptureWorkScheduler.png';
import PasswordGenerator from '../../Assets/PasswordGeneratorSnapshot.png';



function Album() {
    return (
        <div className="album py-5 bg-light" >
            <div className="container bg-light">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-12" id="bigCard">
                            <img src={Schoolgle}
                                alt="Schoolgle Landing Page"
                                id="appPic1"
                            />
                            <div className="card-body">
                                <p className="card-text">SCHOOLGLE</p>
                                <div><a href="https://schoolgle.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check out the App!</a> {"  "}
                                    <a href="https://github.com/Andrew836-dev/project2" target="_blank" rel="noopener noreferrer">Check out the Repo!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm" id="smallCard">
                            <img src={MusicQuiz}
                                alt="Music Quiz"
                                id="appPic"
                            />
                            <div className="card-body">
                                <p className="card-text" style={{fontSize: "larger"}}>Music Quiz Application</p>
                               <div><a href="https://marasinipradeep.github.io/music-app/" target="_blank" rel="noopener noreferrer">Check out the App!</a> {"  "}
                                    <a href="https://github.com/marasinipradeep/music-app" target="_blank" rel="noopener noreferrer">Check out the Repo!</a>
                                    </div></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm" id="smallCard">
                            <img src={WorkScheduler}
                                alt="Work Scheduler"
                                id="appPic"
                            />
                            <div className="card-body">
                                <p className="card-text">Work Day Scheduler</p>
                              <div> <a href="https://bh-2312.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer">Check out the App!</a> {"  "}
                                    <a href="https://github.com/BH-2312/work-day-scheduler" target="_blank" rel="noopener noreferrer">Check out the Repo!</a>
                                    </div> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm" id="smallCard">
                            <img src={PasswordGenerator}
                                alt="Work Scheduler"
                                id="appPic"
                            />
                            <div class="card-body">
                                <p class="card-text">Password Generator</p>
                               <div><a href="https://bh-2312.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">Check out the App!</a> {"  "}
                                <a href="https://github.com/BH-2312/Password-Generator" target="_blank" rel="noopener noreferrer">Check out the Repo!</a>
                                </div> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Album;