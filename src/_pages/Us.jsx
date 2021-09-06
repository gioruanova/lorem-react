import React from "react";
import styled from "styled-components";
import UsImage from "../img/work.png";

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255 253 253 / 20%);
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin: 2rem 20rem;
  text-align: center;
  h1,
  p {
    color: var(--primario);
    text-align: center;
  }
`;

const AboutUsImage = styled.div`
  padding: 2rem;
`;

const ImageAboutUs = styled.div`
  background-image: url(${UsImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 40rem;
  height: 25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

export default function Us() {
  return (
    <AboutUs>
      <h1>Something To Know About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit
        quis aut quam odit debitis labore iste nemo perferendis ipsum ut omnis
        modi neque officia nihil nisi, atque temporibus nobis?
      </p>
      <AboutUsImage>
        <ImageAboutUs></ImageAboutUs>
      </AboutUsImage>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit
        quis aut quam odit debitis labore iste nemo perferendis ipsum ut omnis
        modi neque officia nihil nisi, atque temporibus nobis?Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Aliquam voluptatibus ratione,
        corrupti saepe placeat, repudiandae aut soluta, laboriosam commodi
        doloribus ea aspernatur voluptas quod sint excepturi enim magni sapiente
        molestiae?
      </p>
    </AboutUs>
  );
}
