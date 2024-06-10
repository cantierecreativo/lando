import { useState } from "react";
import ReactMapGL from "react-map-gl";

function MyMap({ latitude, longitude, token, style, zoom }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: latitude,
    longitude: longitude,
    zoom: zoom,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={style ? style : ""}
      mapboxAccessToken={token}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      attributionControl={false}
    />
  );
}

export default MyMap;
