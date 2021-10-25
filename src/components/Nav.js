import React from "react";
import beer from "../img/beer.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInRight } from "../animation";

const Nav = ({ input, breweryInput, searchBrewery }) => {
  const pageRefresh = () => {
    return document.location.reload();
  };
  return (
    <StyledNav variants={fadeInRight} initial="hidden" animate="show">
      <StyledLogo>
        <img src={beer} alt="beer" />
        <h1 onClick={pageRefresh}>Brewery Info</h1>
      </StyledLogo>
      <StyledInput>
        <form>
          <input
            value={input}
            onChange={breweryInput}
            type="text"
            placeholder="Search by keyword"
          ></input>
          <button onClick={searchBrewery} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </StyledInput>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: whitesmoke;
`;

const StyledLogo = styled.div`
  display: flex;
  padding-right: 4rem;
  img {
    height: 3rem;
    width: 3rem;
    filter: brightness(0) invert(1);
  }
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    img {
      height: 2rem;
      width: 2rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 700px) {
    padding-right: 2rem;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    img {
      height: 1rem;
      width: 1rem;
    }
    h1 {
      font-size: 1.3rem;
    }
  } ;
`;

const StyledInput = styled.div`
  padding: 2rem 0rem;
  input {
    font-size: 1.2rem;
    padding: 0.3rem;
    border: none;
    background: whitesmoke;
  }
  button {
    font-size: 1.2rem;
    padding: 0.3rem 1rem;
    border: none;
    background: #ffbb27ea;
    cursor: pointer;
    &:hover {
      background: #5f5e5e;
      color: #ffbb27ea;
    }
  }
`;

export default Nav;
