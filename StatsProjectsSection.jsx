// src/components/StatsProjectsSection.js
import React from "react";
import { FaSmile, FaFolderOpen, FaUsers } from "react-icons/fa";
import "../styles/statsprojects.css"; // make sure file name matches exactly!

const StatsProjectsSection = () => {
  return (
    <div className="stats">
      <div className="stat-box">
        <div className="icon-circle">
          <FaSmile className="icon" />
        </div>
        <h3>582+</h3>
        <p>HAPPY CLIENTS</p>
      </div>
      <div className="stat-box">
        <div className="icon-circle">
          <FaFolderOpen className="icon" />
        </div>
        <h3>75+</h3>
        <p>FINISHED PROJECTS</p>
      </div>
      <div className="stat-box">
        <div className="icon-circle">
          <FaUsers className="icon" />
        </div>
        <h3>07+</h3>
        <p>EXPERIENCED EXPERTS</p>
      </div>
    </div>
  );
};

export default StatsProjectsSection;
