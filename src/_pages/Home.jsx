import React from "react";
import styled from "styled-components";
import Section from "../_components/Section";
import Section2 from "../_components/Section2";
import Image1 from "../img/1.png";

export default function Home() {
  return (
    <>
      <Section
        pic1 
        marg
        title="From A Great Idea To A Successfull App"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea in provident ab odio non quidem animi placeat harum perspiciatis"
        btn1="conocer mas"
        btn2="inscribirse"
      />
      <Section2 />
      <div>
        <Section
          pic2
          title="Digital Agency That Help You To Go Ahead"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea in provident ab odio non quidem animi placeat harum perspiciatis"
          btn1="conocer mas"
          
        />
      </div>
    </>
  );
}
