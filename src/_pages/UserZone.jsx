import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const FormCont = styled.div`
  color: white;
  width: ${isMobile ? "250px" : "500px"};
  height: 450px;
  margin: 40px auto 0;
  background-color: rgba(0, 0, 0, 0, 0.6);
  text-align: center;
  padding: 2rem 3rem 4rem 3rem;
  border: 3px solid #ffff;
  border-radius: 70px 0 70px 0;
  input {
    width: 100%;
    height: 50px;
    border-radius: 10px 0 10px 0;
    border: 2px solid white;
    background: transparent;
    color: #fff;
  }
  p {
    color: white;
    margin: 0.5rem;
  }
`;

const Pass = styled.a`
  text-decoration: none;
  display: block;
  margin-top: 30px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  font-family: monospace;
  color: white;
  text-decoration: none;
`;

const LogIn = styled.a`
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(255, 154, 136, 1);
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 5px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
`;

export default function UserZone() {
  return (
    <FormCont>
      <h2>Acceso Usuarios</h2>
      <p>Nombre</p>
      <input type="text" name="" id=""></input>
      <p>Email</p>
      <input type="email" name="" id=""></input>
      <p>Telefono</p>
      <input type="Tel No" name="" id=""></input>
      <LogIn href="#">Log in</LogIn>
      <Pass href="#">Olvide Mi contraseña</Pass>
    </FormCont>
  );
}
