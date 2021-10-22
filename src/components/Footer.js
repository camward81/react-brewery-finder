import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
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

const StyledFooter = styled.div`
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
