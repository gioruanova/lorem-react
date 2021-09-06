import React from "react";
import Styled from "styled-components";
import { ReactSVG } from "react-svg";

const IconWrapper = Styled.div`
background-color: rgb(255 253 253 / 20%);
border-radius:100rem;
width: 5rem;
height: 5rem;
margin: 0 auto;
display:flex;
align-items: center;
justify-content: center;
svg{
    
    width: 3rem;
    height: 3rem;
}
`;

const IconWrapper2 = Styled(IconWrapper)`
svg{
    fill: red;
    width: 3rem;
    height: 3rem;
}
`;

export default function Icons({ name }) {
  switch (name) {
    case "help":
      return (
        <IconWrapper>
          <ReactSVG src="_icons/help.svg" />
        </IconWrapper>
      );
    case "asistencia":
      return (
        <IconWrapper>
          <ReactSVG src="_icons/headphones.svg" />
        </IconWrapper>
        );
        case "llamar":
          return (
            <IconWrapper>
              <ReactSVG src="_icons/like.svg" />
            </IconWrapper>
      );
    default:
      return (
        <IconWrapper2>
          <ReactSVG src="_icons/error.svg" />
        </IconWrapper2>
      );
  }
}
