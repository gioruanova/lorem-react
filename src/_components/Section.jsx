import React from "react";
import styled from "styled-components";
import { Button } from "../_components/Styles";
import Image1 from "../img/1.png";
import Image2 from "../img/3.jpg";
import customers from "../img/customers.jpg";
import { isMobile } from "react-device-detect";

function changePicture({ pic1, pic2, pic3 }) {
  return (pic1 && Image1) || (pic2 && Image2) || (pic3 && customers);
}

const Bannerinfo = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(255 253 253 / 20%);
  margin: ${isMobile ? "2rem 1rem 1rem 1rem" : "1rem 8rem 1rem 8rem"};
  border-radius: 1rem;
  overflow: hidden;
  padding: 1rem 3rem;
  column-gap: 2rem;
  text-align: ${isMobile ? "center" : "left"};
  p,
  h1 {
    color: var(--primario);
    text-align: ${isMobile ? "center":"left"};
 `;

const ImagenBanner = styled.div`
  background-image: url(${changePicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 1rem;
  border-color: none;
  width: 100%;
  height: 17rem;
`;

function Section({ title, text, btn1, btn2, column, pic1, pic2, pic3, marg }) {
  return (
    <Bannerinfo>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        {btn1 ? <Button>{btn1}</Button> : <></>}
        {btn2 && <Button secondary>{btn2}</Button>}
      </div>
      <ImagenBanner pic1={pic1} pic2={pic2} pic3={pic3}></ImagenBanner>
    </Bannerinfo>
  );
}
export default Section;
