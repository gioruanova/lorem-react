import React from "react";
import TopBar from "../_components/TopBar";
import Footer from "../_components/Footer";
import Content from "../_components/Content";
import styled from "styled-components";

const ContentFormat = styled.div`
  margin-top: 6rem;
  width: 100%;
`;

const WebLayuot = ({ children }) => {
  return (
    <>
      <TopBar />
      <ContentFormat>
        <Content>{children}</Content>
      </ContentFormat>
      <Footer/>
    </>
  );
};

export default WebLayuot;
