import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Styles
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { fadeInRight } from "../animation";

const Map = ({ brewery, map }) => {
  return (
    <StyledMap variants={fadeInRight} initial="hidden" animate="show">
      <MapContainer
        center={[40, -98]}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          marginLeft: "27.5rem",
          height: "15rem",
          width: "30rem",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={map}>
          <Popup>{brewery.name}</Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  );
};

const StyledMap = styled(motion.div)`
  @media (max-width: 1160px) {
    margin-left: -6rem;
  }
  @media (max-width: 900px) {
    margin-left: -14rem;
  }
  @media (max-width: 700px) {
    margin-left: -20rem;
  }
  @media (max-width: 600px) {
    margin-left: -26.8rem;
  }
`;

export default Map;
