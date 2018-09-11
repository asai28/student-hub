import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-4">
          <Link to="/rmp" title="Rate My Professor" alt="Rate My Professor">
            <img
              src={
                "https://bloximages.newyork1.vip.townnews.com/laloyolan.com/content/tncms/assets/v3/editorial/2/a2/2a274d71-8277-5bd1-be25-c65cdb710e42/5ac80d20dfc1e.image.jpg?resize=1200%2C600"
              }
              alt={"Rate my Professor"}
            />
          </Link>
        </div>
        <div className="col-lg-4">
          <Link
            to="/schedule"
            title="Question Papers, Scheduler and more!"
            alt="Question Papers, Scheduler and more!"
          >
            <img
              src={
                "https://sundayskills.com/wp-content/uploads/2018/03/cover-image.jpg"
              }
              alt={"Papers"}
            />
          </Link>
        </div>
        <div className="col-lg-4">
          <Link
            to="/internships"
            title="Student internships and full-time jobs"
            alt="Student internships and full-time jobs"
          >
            <img
              src={
                "https://i1.wp.com/www.metacenterchicago.com/wp-content/uploads/2018/02/the-positive-implications-of-internships-961x600.jpg?fit=961%2C600&ssl=1"
              }
              alt={"Internships"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Container;
