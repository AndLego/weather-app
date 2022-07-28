import React from "react";
import ReactDOM from "react-dom";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvent,
  Rectangle,
} from "react-leaflet";
import { useEventHandlers } from "@react-leaflet/core";
import { APIContext } from "../Context/ApiContext";

import "../styles/Map.css";
import "leaflet/dist/leaflet.css";
import { AiFillCloseCircle } from "react-icons/ai";

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

const BOUNDS_STYLE = { weight: 1 };

function MinimapBounds({ parentMap, zoom }) {
  const minimap = useMap();

  // Clicking a point on the minimap sets the parent's map center
  const onClick = React.useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent("click", onClick);

  // Keep track of bounds in state to trigger renders
  const [bounds, setBounds] = React.useState(parentMap.getBounds());
  const onChange = React.useCallback(() => {
    setBounds(parentMap.getBounds());
    // Update the minimap's view to match the parent map's center and zoom
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Listen to events on the parent map
  const handlers = React.useMemo(
    () => ({ move: onChange, zoom: onChange }),
    []
  );
  useEventHandlers({ instance: parentMap }, handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

function MinimapControl({ position, zoom }) {
  const parentMap = useMap();
  const mapZoom = zoom || 0;

  // Memoize the minimap so it's not affected by position changes
  const minimap = React.useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    []
  );

  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
}

const Map = ({ close }) => {
  const { coords } = React.useContext(APIContext);

  const handleClose = () => {
    return close(false);
  };

  return ReactDOM.createPortal(
    <div className="map-background">
      <div className="map-hero">
        <span className="closeMap" onClick={handleClose}>
          <AiFillCloseCircle />
        </span>
        <MapContainer
          center={[coords.lat, coords.lon]}
          zoom={10}
          scrollWheelZoom={false}
          className="map-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MinimapControl position="topright" />
        </MapContainer>
      </div>
    </div>,
    document.getElementById("map")
  );
};

export { Map };
