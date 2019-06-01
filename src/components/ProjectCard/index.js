import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.openProject(props.url)} />
      </div>
      <div className="card-body">
        <h4 className="card-text">{props.name}</h4>
      </div>
    </div>
  );
}

export default ProjectCard;
