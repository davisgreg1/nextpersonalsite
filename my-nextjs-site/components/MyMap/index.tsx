import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const center = {
  lat: 40.7465,
  lng: -74.0014,
};

type CustomOptionsType = {
  mapTypeControl?: boolean;
  zoom?: number;
  clickableIcons?: boolean;
  panControl?: boolean;
  rotateControl?: boolean;
  scaleControl?: boolean;
  streetViewControl?: boolean;
  zoomControl?: boolean;
  fullscreenControl?: boolean;
  mapId?: string;
};

type MyMapProps = {
  customOptions?: CustomOptionsType;
};

const MyMap = (props: MyMapProps) => {
  const { customOptions } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
  });

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const mapOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  };

  const modifiedCustomOptions = {
    ...customOptions,
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  };
  const options = customOptions ? modifiedCustomOptions : mapOptions;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        animation={google.maps.Animation.DROP}
        position={center}
        title={`I'm from NYC!`}
      />
    </GoogleMap>
  ) : (
    <div className="w-1/2" aria-label="gregory location"></div>
  );
};

export default MyMap;
