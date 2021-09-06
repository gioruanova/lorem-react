import React from "react";
import styled from "styled-components";
import BackgroundImage from "../img/back2.jpg";

export const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  width: 100%;
`;

const BaseButton = styled.button`
  border-radius: 50rem;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  border: none;
  margin: 1rem 1rem 0 0;
  background-color: rgb(255, 154, 136, 1);
  &:hover {
    cursor: pointer;
  }
`;

const Secondary = styled(BaseButton)`
  background-color: rgb(89, 128, 230, 1);
`;

export function Button({ secondary, children }) {
  return secondary ? (
    <Secondary> {children} </Secondary>
  ) : (
    <BaseButton> {children} </BaseButton>
  );
}
