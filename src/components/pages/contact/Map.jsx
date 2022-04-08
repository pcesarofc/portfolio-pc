import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

const Map = () => {

  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0]
  });

  return <MapContainer center={[-21.745695687790874, -41.345764251556524]} zoom={17}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-21.745695687790874, -41.345764251556524]} icon={customMarker}>
      <Popup>
        R. Visconde de Alvarenga - 162
      </Popup>
    </Marker>
  </MapContainer>
}

export default Map