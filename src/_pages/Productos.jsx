import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255 253 253 / 20%);
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin: ${isMobile ? "2rem":"2rem 20rem"};
  text-align: center;
  h1,
  p {
    color: var(--primario);
    text-align: center;
  }
`;

export default function Us() {
  return (
    <AboutUs>
      <h1>Productos</h1>
      <p>Coming soon</p>
    </AboutUs>
  );
}
