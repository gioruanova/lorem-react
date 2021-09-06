import React from "react";
import styled from "styled-components";
import { Button } from "../_components/Styles";
import Image1 from "../img/1.png";
import Image2 from "../img/3.jpg";




function changePicture({ pic1, pic2, pic3, theme }) {
  return (pic1 && Image1) || (pic2 && Image2) || (pic3 && theme.backgroundImage);
}

function flexColumn({ column }) {
  return (
    column && "flex-direction: column;p,h1 {text-align: center !important};"
  );
}

function margin({ marg }) {
  return (marg && "margin: 3rem 30rem;") || "margin: 3rem 20rem;";
}

const Bannerinfo = styled.div`
  display: flex;
  ${flexColumn};
  align-items: center;
  justify-content: space-evenly;
  ${margin};
  background-color: rgb(255 253 253 / 20%);
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem 4rem;
  column-gap: 2rem;
  p,
  h1 {
    color: var(--primario);
    text-align: left;
 `;



const ImagenBanner = styled.div`
  background-image: url(${changePicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 1rem;
  border-color: none;
  width: 30rem;
  height: 17rem;
`;

function Section({ title, text, btn1, btn2, column, pic1, pic2, pic3, marg }) {
  return (
    <Bannerinfo column={column} marg={marg}>
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
