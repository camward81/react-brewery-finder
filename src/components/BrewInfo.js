import React from "react";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { slideUp } from "../animation";

const BrewInfo = ({ brewery }) => {
  const addPhoneDash = (num) => {
    const splitNum = num.split("");
    const addDash = splitNum
      .map((el, i) => (i === 2 || i === 5 ? el.concat("-") : el))
      .join("");
    return addDash;
  };

  const simplifyURL = (site) => {
    const splitURL = site.split("/");
    const remove = splitURL
      .map((el, i) => (i === 0 ? splitURL.splice() : el))
      .join("");
    if (remove.includes("www.")) {
      const newSplit = remove.split(".");
      const newRemove = newSplit
        .map((el, i) => (i === 0 ? newSplit.splice() : el))
        .join(".")
        .replace(".", "");
      return newRemove;
    } else {
      return remove;
    }
  };

  return (
    <StyledBrewInfo variants={slideUp} initial="hidden" animate="show">
      <div>
        <h2>{brewery.name ? brewery.name : ""}</h2>
      </div>
      <div>
        <h2>{brewery.street ? brewery.street : ""}</h2>
      </div>
      <div>
        <h2>
          {brewery.city ? brewery.city : ""},{" "}
          {brewery.state ? brewery.state : ""}
        </h2>
      </div>
      <div>
        <h2>{brewery.phone ? addPhoneDash(brewery.phone) : ""}</h2>
      </div>
      <div>
        <h2>
          <a href={brewery.website_url} target="_blank" rel="noreferrer">
            {brewery.website_url ? simplifyURL(brewery.website_url) : ""}
          </a>
        </h2>
      </div>
    </StyledBrewInfo>
  );
};

const StyledBrewInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-top: solid whitesmoke 2px;
  margin-left: 22rem;
  margin-right: 22rem;
  margin-top: 2rem;
  line-height: 4.5rem;
  letter-spacing: 1px;
  color: whitesmoke;
  h2 {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: #ffbb27ea;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 1160px) {
    margin-left: 15rem;
    margin-right: 15rem;
  }
  @media (max-width: 900px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
    h2 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 375px) {
    padding: 1rem;
    h2 {
      font-size: 1rem;
    }
  }
`;

export default BrewInfo;
