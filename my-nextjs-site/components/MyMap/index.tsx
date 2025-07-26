import React, { useCallback, useState, useMemo, memo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Lottie from "react-lottie-player";
import mapLoading from "@/public/images/lottie/mapLoading.json";

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
  });

  const locations = useMemo(() => [
    { lat: 35.14198, lng: -90.05591 }, // Memphis
    { lat: 32.7767, lng: -96.797 }, // Dallas, TX
    { lat: 36.1627, lng: -86.7816 }, // Nashville, TN
    { lat: 19.7496, lng: -70.517 }, // Sosua, Dominican Republic
    { lat: 32.5839, lng: -117.1131 }, // Imperial Beach, CA
    { lat: 40.8116, lng: -73.9456 }, // Harlem Hospital, NYC
    { lat: 43.1009, lng: -75.2327 }, // Utica, NY
    { lat: 33.749, lng: -84.388 }, // Atlanta, GA
  ], []);

  const getRandomLocation = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * locations.length);
    return locations[randomIndex];
  }, [locations]);

  const center = useMemo(() => getRandomLocation(), [getRandomLocation]);

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
      aria-label="Gregory location">
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
      onUnmount={onUnmount}>
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
