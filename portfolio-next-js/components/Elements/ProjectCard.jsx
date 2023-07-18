"use client";
import { useState, useEffect, useRef } from "react";

const ProjectCard = ({ project }) => {
  const elementRef = useRef(null);
  const [span, setSpan] = useState(0);
  const [height, setHeight] = useState(0);

 
  return (
    <div>
      <div className="project-card">
        <img
          src={project.imgUrl}
          alt="Project"
          // style={{ height: `${project.height}px` }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
