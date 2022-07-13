import React from "react";
import "../styles/SideBarMenu.css";
import { GiPaperWindmill } from "react-icons/gi";
import {
  TbMap,
  TbMapSearch,
  TbSmartHome,
  TbCalendarStats,
} from "react-icons/tb";

const SideBarMenu = () => {
  return (
    <section className="SideBarMenu">
      <ul className="menu-list">
        <div className="menu-icon">
          <GiPaperWindmill />
          <h1 className="main-title">W-App</h1>
        </div>

        <li className="menu-list--item">
          <TbSmartHome />
          <p>Dashboard</p>
        </li>

        <li className="menu-list--item">
          <TbMap />
          <p>Map</p>
        </li>

        <li className="menu-list--item">
          <TbMapSearch />
          <p>Saved Location</p>
        </li>

        <li className="menu-list--item">
          <TbCalendarStats />
          <p>Calendar</p>
        </li>
      </ul>

      <div className="menu-credits">
        <p>Made with love by AndLego</p>
        <p>2022</p>
      </div>
    </section>
  );
};

export { SideBarMenu };
