import React from "react";
import { Map } from "./Map";
import { SaveLocation } from "./SaveLocation";

import "../styles/SideBarMenu.css";
import { GiPaperWindmill } from "react-icons/gi";
import { BsSave } from "react-icons/bs";
import { TbMap, TbSmartHome } from "react-icons/tb";

const SideBarMenu = () => {
  const [map, setMap] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleMap = () => {
    setMap(true);
  };
  const handleSaved = () => {
    setSaved(true);
  };

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

        <li className="menu-list--item" onClick={handleMap}>
          <TbMap />
          <p>Map</p>
        </li>
        {map && <Map close={setMap} />}

        <li className="menu-list--item" onClick={handleSaved}>
          <BsSave />
          <p>Saved Location</p>
        </li>
        {saved && <SaveLocation close={setSaved} />}
      </ul>

      <div className="menu-credits">
        <p>Made with love by AndLego</p>
        <p>2022</p>
      </div>
    </section>
  );
};

export { SideBarMenu };
