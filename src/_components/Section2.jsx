import React from "react";
import styled from "styled-components";
import iconA from "../img/a.png";
import IconD from "../img/d.png";
import Icons from "../_components/Icons";

function columnService({ column }) {
  return (column && "column") || "row";
}

function columnWidth({ width }) {
  return width && "width: 27rem; margin: 0 auto;";
}

function colorHoover({ color }) {
  return (
    (color && "background-color: orange") ||
    "background-color: rgb(75, 104, 165, 1)"
  );
}

const SectionContenedor = styled.div`
  display: flex;
  flex-direction: ${columnService};
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(255 253 253 / 20%);
  margin: 3rem 5rem;
  ${columnWidth};
  border-radius: 1rem;
  padding: 2rem;
  gap: 1rem;
  p {
    font-size: 1rem;
    color: var(--primario);
    text-align: center;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primario);
    text-align: center;
    text-transform: uppercase;
  }
`;

const ImageIcon = styled.div`
  margin: 0 auto;
  background-color: rgb(255 253 253 / 20%);
  border-radius: 5rem;
  padding: 1rem;
  width: 3rem;
  justify-content: center;
  display: flex;
`;

const Service = styled.div`
  padding: 1rem;
  &:hover {
    cursor: grabbing;
    transition: 2s all;
    ${colorHoover};
    border-radius:2rem;
`;

const IconImage1 = styled.div`
  background-image: url(${iconA});
  background-size: cover;
  background-repeat: no-repeat;
  width: 3rem;
  height: 3rem;
`;



const IconImage4 = styled(IconImage1)`
  background-image: url(${IconD});
`;

export default function Section2({ column, width, color }) {
  return (
    <SectionContenedor column={column} width={width}>
      <Service color={color}>
        <Icons name="help" />
        <h1>Ayuda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet
          consectetur adipisicing elit.
        </p>
      </Service>

      <Service color={color}>
      <Icons name="asistencia" />
        <h1>Asistencia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet
          consectetur adipisicing elit.
        </p>
      </Service>

      <Service color={color}>
      <Icons name="llamar" />
        <h1>Testimonios</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet
          consectetur adipisicing elit.
        </p>
      </Service>

      <Service color={color}>
        <ImageIcon>
          <IconImage4></IconImage4>
        </ImageIcon>
        <h1>Proceso</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit amet
          consectetur adipisicing elit.
        </p>
      </Service>
    </SectionContenedor>
  );
}
