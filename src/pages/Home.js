import React, { useEffect, useState } from "react";
//Components
import Nav from "../components/Nav";
import BrewInfo from "../components/BrewInfo";
import Map from "../components/Map";
//Styles
import styled from "styled-components";
//Images
import factory from "../img/factory.jpg";
//Fetch API
import axios from "axios";

const Home = () => {
  //State
  const [brewery, setBrewery] = useState("");
  const [input, setInput] = useState("");
  const [map, setMap] = useState([32.25049461, -111.0054521]);

  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/breweries/search?query=dragoon")
      .then((data) => {
        setBrewery(data.data[0]);
        console.log(data.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  //Events
  const breweryInput = (e) => {
    setInput(e.target.value);
  };

  const searchBrewery = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
      .then((data) => {
        setBrewery(data.data[0]);
        if (
          Number(data.data[0].latitude) !== 0 &&
          Number(data.data[0].longitude) !== 0
        ) {
          setMap([
            Number(data.data[0].latitude),
            Number(data.data[0].longitude),
          ]);
        } else {
          setMap([0, 0]);
          alert("Map coordinates not provided");
        }
        console.log([
          Number(data.data[0].latitude),
          Number(data.data[0].longitude),
        ]);
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Brewery not found");
        document.location.reload();
      });
    setInput("");
  };

  return (
    <StyledHome>
      <Nav
        input={input}
        breweryInput={breweryInput}
        searchBrewery={searchBrewery}
      />
      {brewery && <BrewInfo brewery={brewery} />}
      <Map brewery={brewery} map={map} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  height: 140vh;
  background: url(${factory});
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(19, 33, 58, 0.884);
  overflow-x: hidden;
`;

export default Home;
