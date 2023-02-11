import { useState } from "react";
import Icon from "components/layout/Icon";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

function Map({ record }) {
  const { map } = record;
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;
  const [viewport, setViewport] = useState({
    latitude: map.latitude,
    longitude: map.longitude,
    zoom: 16,
  });

  return (
    <section className="container py-6 lg:py-12">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <div className="aspect-square lg:aspect-video">
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              // mapStyle="mapbox://styles/neuroscienze/cla9rapa5000n15n4vp1qwa6f"
              mapboxApiAccessToken={TOKEN}
              onViewportChange={setViewport}
            >
              <NavigationControl style={{ padding: 10 }} />
              <Marker latitude={map.latitude} longitude={map.longitude}>
                <Icon name="pin" size="30" className="fill-siena" />
              </Marker>
            </ReactMapGL>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
