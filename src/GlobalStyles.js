import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
   ::-webkit-scrollbar {
     width: 8px;
   }
   ::-webkit-scrollbar-track {
    background: rgba(19, 33, 58, 0.884);
    
   }
   ::-webkit-scrollbar-thumb {
     background: #727171;
     border-radius: 25px;
   }
  }
`;

export default GlobalStyles;
