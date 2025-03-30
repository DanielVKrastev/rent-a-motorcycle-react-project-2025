import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const officeLocation = [43.210322, 27.907953];

const MapComponent = () => {
  return (
    <MapContainer center={officeLocation} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
      <Marker position={officeLocation}>
        <Popup>This is where our office is located!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
