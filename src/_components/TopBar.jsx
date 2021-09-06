import React from "react";
import styled from "styled-components";
import Icon1 from "../img/face.png";
import Icon2 from "../img/insta.png";
import Icon3 from "../img/linke.png";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

const Logo = styled.div`
h1,
a {
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  font-size: 1rem;
  font-weight: lighter;
  padding-bottom: 0.3rem;
  
}
span h2 {
  font-size: 1.5rem;
  font-weight: bold;
  display: inline;
`;

const MenuLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.fontColor};
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
        <a href="#">Productos</a>
        <a href="/Services">Servicios</a>
        <a href="/Clientes">Clientes</a>
        <a href="/UserZone">Zona usuarios</a>
      </MenuLinks>

      <Social>
        <a href="https://www.facebook.com" target="_blank">
          <Facebook></Facebook>
        </a>

        <a href="https://www.instagram.com" target="_blank">
          <Instagram></Instagram>
        </a>

        <a href="https://www.linkedin.com" target="_blank">
          <Linkedin></Linkedin>
        </a>
      </Social>
    </NavBar>
  );
}
