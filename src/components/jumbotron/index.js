import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <section className="jumbotron text-center bg-secondary">
    <div className="container">
        <h1>Ben Hilliard</h1>
        <h6 className="text-black">Passionate about creating exciting new applications</h6>
        <p><a href="https://github.com/BH-2312"> <i className="fa fa-github-square"
                    ></i></a>
        </p>
        <p><a href="https://www.linkedin.com/in/ben-hilliard-9777894b/"> <i className="fa fa-linkedin-square"
                    ></i></a></p>
        <a href="benhilliard23@hotmail.com" className="lead text-muted">benhilliard23@hotmail.com</a>
        <p className="lead text-muted">Ph: <a href="tel:0468 850 935" className="lead text-muted">0468 850 935</a>
        </p>
        <p className="lead text-muted">Resume<a href="Assets\Ben Hilliard Resume Sep 2020.pdf"> <i
                    className="fa fa-file-pdf-o"></i></a></p>
    </div>
</section>

  )
}



export default Jumbotron;