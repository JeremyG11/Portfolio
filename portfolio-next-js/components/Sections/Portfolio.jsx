import React from "react";
import Tabs from "../Elements/Tabs";

const Portfolio = () => {
  const tabs = [
    { title: "All", content: "Content for Tab 1" },
    { title: "Designs", content: "Content for Tab 2" },
    { title: "Web Apps", content: "Content for Tab 3" },
    { title: "Latest", content: "Content for Tab 4" },
  ];
  const projects = [
      {
        name: "Project 1",
        title: "Project Title 1",
        imgUrl: "https://example.com/project1.jpg",
        type: "frontend",
        description: "Project 1 description",
        timestamp: "2022-10-15T10:30:00.000Z",
      },
      {
        name: "Project 2",
        title: "Project Title 2",
        imgUrl: "https://example.com/project2.jpg",
        type: "designs",
        description: "Project 2 description",
        timestamp: "2022-11-20T14:45:00.000Z",
      },
      {
        name: "Project 3",
        title: "Project Title 3",
        imgUrl: "https://example.com/project3.jpg",
        type: "frontend",
        description: "Project 3 description",
        timestamp: "2022-09-05T08:15:00.000Z",
      },
      {
        name: "Project 4",
        title: "Project Title 4",
        imgUrl: "https://example.com/project4.jpg",
        type: "design",
        description: "Project 4 description",
        timestamp: "2022-12-10T16:20:00.000Z",
      },
      {
        name: "Project 5",
        title: "Project Title 5",
        imgUrl: "https://example.com/project5.jpg",
        type: "backend",
        description: "Project 5 description",
        timestamp: "2023-01-08T12:00:00.000Z",
      },
    ]
  

  return (
    <>
      <Tabs tabsData={tabs} projects={projects} />
    </>
  );
};

export default Portfolio;
