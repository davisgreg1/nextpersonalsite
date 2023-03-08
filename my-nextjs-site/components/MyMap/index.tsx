import React, { useCallback, useState, useMemo, memo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Lottie from "react-lottie-player";
import mapLoading from "@/public/images/lottie/mapLoading.json";

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
  });

  const center = useMemo(() => ({ lat: 40.7465, lng: -74.0014 }), []);

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

  return !isLoaded ? (
    <div
      className="flex justify-center items-center self-center m-auto h-screen"
      aria-label="Gregory location"
    >
      Map loading...
      <Lottie
        loop
        animationData={mapLoading}
        play
        style={{ height: 125, width: 125 }}
      />
    </div>
  ) : (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        key="Greg Map Marker"
        animation={google.maps.Animation.DROP}
        position={center}
        title={`I'm from NYC!`}
        icon={{
          url: "/images/mapMarker.svg",
          anchor: new google.maps.Point(17, 46),
          scaledSize: new google.maps.Size(37, 37),
        }}
      />
    </GoogleMap>
  );
};

export default memo(MyMap);
