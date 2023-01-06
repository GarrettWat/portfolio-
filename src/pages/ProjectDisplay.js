import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ComputerIcon from '@mui/icons-material/Computer';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
      <a href={project.git} target="_blank"><GitHubIcon /></a>
      <a href={project.link} target="_blank"><ComputerIcon /></a>
      </div>

    </div>
  );
}

export default ProjectDisplay;