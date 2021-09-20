import React from "react";
import styled from "styled-components";
import Icon1 from "../img/face.png";
import Icon2 from "../img/insta.png";
import Icon3 from "../img/linke.png";
import { isMobile } from "react-device-detect";

const ContentNavbar = styled.div`
  margin-bottom: ${isMobile ? "16rem" : "3rem"};
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: rgb(255 253 253 / 20%);
  width: 100%;
  height: ${isMobile ? "15rem" : "3rem"};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  color: white;
`;

const Logo = styled.div`
h1,
a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: lighter;
  padding-bottom: 0.3rem;
  
}
span h2 {
  font-size: 1.5rem;
  font-weight: bold;
  display: inline;
  color: white;
`;

const MenuLinks = styled.div`
display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  a {
    justify-content: space-between;
    text-align: center;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    color: white;
    &:hover {
      cursor: pointer;
      transition: 3s all;
      border-bottom: 1px solid black;
    }
  }
`;

const Social = styled.a`
  display: flex;
  margin: 0 0 0 0.5rem;
  padding: 1rem;
`;

const Facebook = styled.div`
  background-image: url(${Icon1});
  background-size: cover;
  background-repeat: no-repeat;
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
`;

const Instagram = styled(Facebook)`
  background-image: url(${Icon2});
`;

const Linkedin = styled(Facebook)`
  background-image: url(${Icon3});
  width: 1.2rem;
  margin-right: 1rem;
`;

export default function TopBar() {
  return (
    <ContentNavbar>
      <NavBar>
        <Logo>
          <a href="/">
            <h1>
              el
              <span>
                <h2>Lorem</h2>
              </span>
            </h1>
          </a>
        </Logo>

        <MenuLinks>
          <a href="/">Inicio</a>
          <a href="/Us">Nosotros</a>
          <a href="/">Productos</a>
          <a href="/Services">Servicios</a>
          <a href="/Clientes">Clientes</a>
          <a href="/UserZone">Zona usuarios</a>
        </MenuLinks>

        <Social>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook></Facebook>
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram></Instagram>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin></Linkedin>
          </a>
        </Social>
      </NavBar>
    </ContentNavbar>
  );
}
