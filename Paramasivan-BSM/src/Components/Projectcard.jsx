import React from "react";
import "./ProjectCard.css";
import ClgLook from "../assets/ClgLook.png";
export const Projectcard = () => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={ClgLook} alt="Avatar" className="img-fluid" />
          </div>
          <div className="flip-card-back">
            <h5 className="mt-5">College Website</h5>

            <a href="" className="btn btn-outline-primary  mt-3">
              View Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
