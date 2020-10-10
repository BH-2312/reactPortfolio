import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Jumbotron() {
  return (
    <section className="jumbotron text-center bg-light" style={{ marginBottom: "0px" }}>
      <div className="container">
        <h1>Ben Hilliard</h1>
        <h5 className="text-black">Passionate about creating exciting new applications</h5>
        <div>
          <a href="https://github.com/BH-2312" target = "_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github-square']} style={{ fontSize: "36px" }} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ben-hilliard-9777894b/" target = "_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: "36px" }} />
          </a>
        </div>
        <a href="benhilliard23@hotmail.com" className="lead text-muted">benhilliard23@hotmail.com</a>
        <p className="lead text-muted">Ph: <a href="tel:0468 850 935" className="lead text-muted">0468 850 935</a>
        </p>
        <div><a href="Assets\Ben Hilliard Resume Sep 2020.pdf">
          <FontAwesomeIcon icon="envelope" style={{ fontSize: "36px" }} /> Resume
        </a></div>
      </div>
    </section>

  )
}



export default Jumbotron;