import React from "react";
import styled from "styled-components";

const FooterCont = styled.div`
  background-color: rgb(255 253 253 / 20%);
  
  margin: 3rem 0;
  padding: 0.001rem;
  p {
    text-align: center;
    color: white;
  }
  position: absolute;
  width: 100%;
`;

const FooterCont2 = styled.div`
  background-color: red;
  p {
    text-align: center;
    color: white;
  }
  position: absolute;
  width: 50%;
`;

function Footer({ Title }) {
  return (
    (Title && (
      <FooterCont2>
        <p>Title</p>
      </FooterCont2>
    )) || <FooterCont><p>Todos los derechos reservados 2021.</p></FooterCont>
  );
}

export default Footer;
