import React from "react";
import "./Tabs.css";
// const
const CardTabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Your", "All", "Blocked"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    // setOwnerId(ownerId);
  };

  return (
    <div className="card-tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${selectedTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default CardTabs;
