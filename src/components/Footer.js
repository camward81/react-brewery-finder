import React from "react";
//Styles
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { slideUp } from "../animation";

const Footer = () => {
  return (
    <StyledFooter variants={slideUp} initial="hidden" animate="show">
      <h3>
        Powered by{" "}
        <a
          href="https://www.openbrewerydb.org/"
          target="_blank"
          rel="noreferrer"
        >
          openbrewerydb.org
        </a>
      </h3>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.div)`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 2rem;
  color: whitesmoke;
  a {
    text-decoration: none;
    color: #ffbb27ea;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
