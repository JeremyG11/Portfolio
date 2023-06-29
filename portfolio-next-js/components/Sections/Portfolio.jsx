import React from "react";
import Tabs from "../Elements/Tabs";

const Portfolio = () => {
  const tabs = [
    { title: "All", content: "Content for Tab 1" },
    { title: "Designs", content: "Content for Tab 2" },
    { title: "Web Apps", content: "Content for Tab 3" },
    { title: "Latest", content: "Content for Tab 4" },
  ];
  return (
    <>
      <Tabs tabsData={tabs} />
    </>
  );
};

export default Portfolio;
