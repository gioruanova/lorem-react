import React from "react";
import styled from "styled-components";

const FooterCont = styled.div`
  background-color: rgb(255 253 253 / 20%);
  font-weight: bold;
  margin: 3rem 0;
  padding: 0.001rem;
  p {
    text-align: center;
    color: var(--primario);
  }
  position: absolute;
  width: 100%;
`;

const FooterCont2 = styled.div`
  background-color: red;
  p {
    text-align: center;
    color: var(--primario);
  }
  position: absolute;
  width: 50%;
`;

function Footer({ falopa }) {
  return (
    (falopa && (
      <FooterCont2>
        <p>falopa</p>
      </FooterCont2>
    )) || <FooterCont><p>Todos los derechos reservados 2021</p></FooterCont>
  );
}

export default Footer;
