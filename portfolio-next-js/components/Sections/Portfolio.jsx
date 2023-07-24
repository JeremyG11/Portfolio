import React from "react";
import Tabs from "../Elements/Tabs";

async function getProjects() {
  const res = await fetch(
    ` https://portfolio-rest-api.onrender.com/api/projects/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Portfolio = async () => {
  const projects = await getProjects();
  const tabs = [
    { title: "All", content: "Content for Tab 1" },
    { title: "Designs", content: "Content for Tab 2" },
    { title: "Web Apps", content: "Content for Tab 3" },
    { title: "Latest", content: "Content for Tab 4" },
  ];
  const project = [
    {
      name: "Project 1",
      title: "Project Title 1",
      imgUrl:
        "https://images.unsplash.com/photo-1688917169732-834612d59842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "frontend",
      description: "Project 1 description",
      timestamp: "2022-10-15T10:30:00.000Z",
    },
    {
      name: "Project 2",
      title: "Project Title 2",
      imgUrl:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      type: "designs",
      description: "Project 2 description",
      timestamp: "2022-11-20T14:45:00.000Z",
    },
    {
      name: "Project 3",
      title: "Project Title 3",
      imgUrl:
        "https://images.unsplash.com/photo-1688383213635-9bc2fc25103d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "frontend",
      description: "Project 3 description",
      timestamp: "2022-09-05T08:15:00.000Z",
    },
    {
      name: "Project 4",
      title: "Project Title 4",
      imgUrl:
        "https://images.unsplash.com/photo-1689154345860-fa9dab2f92c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "design",
      description: "Project 4 description",
      timestamp: "2022-12-10T16:20:00.000Z",
    },
    {
      name: "Project 5",
      title: "Project Title 5",
      imgUrl:
        "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "backend",
      description: "Project 5 description",
      timestamp: "2023-01-08T12:00:00.000Z",
    },
    {
      name: "Project 1",
      title: "Project Title 1",
      imgUrl:
        "https://images.unsplash.com/photo-1688917169732-834612d59842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "frontend",
      description: "Project 1 description",
      timestamp: "2022-10-15T10:30:00.000Z",
    },
    {
      name: "Project 2",
      title: "Project Title 2",
      imgUrl:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      type: "designs",
      description: "Project 2 description",
      timestamp: "2022-11-20T14:45:00.000Z",
    },
    {
      name: "Project 3",
      title: "Project Title 3",
      imgUrl:
        "https://images.unsplash.com/photo-1688383213635-9bc2fc25103d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "frontend",
      description: "Project 3 description",
      timestamp: "2022-09-05T08:15:00.000Z",
    },
  ];

  return (
    <>
      <Tabs tabsData={tabs} projects={projects} />
    </>
  );
};

export default Portfolio;
