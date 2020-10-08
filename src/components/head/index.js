import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
    <div className="bg-dark collapse" id="navbarHeader">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">Passionate about creating exciting new applications</h4>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                        <li><a href="tel:0468 850 935" class="text-white">0468 850 935</a></li>
                        <li><a href="benhilliard23@hotmail.com" class="text-white" style={{color: "red"}}>benhilliard23@hotmail.com</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/ben-hilliard-9777894b/"
                                className="text-white">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
</header>
  );
}



export default Header;