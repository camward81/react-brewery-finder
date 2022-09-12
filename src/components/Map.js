import React from "react";
//Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Styles
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { slideUp } from "../animation";

const Map = ({ brewery, map }) => {
  return (
    <StyledMap variants={slideUp} initial="hidden" animate="show">
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
    margin-left: -24rem;
  }
  @media (max-width: 375px) {
    margin-left: -27rem;
  }
  @media (min-width: 1440px) {
    margin-left: 3rem;
  }
  @media (min-width: 1920px) {
    margin-left: 17rem;
  }
  @media (min-width: 2560px) {
    margin-left: 37rem;
  }
`;

export default Map;
