import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "./layout.styles";
import Banner from "../Banner/Banner";

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <Banner />
      <Outlet />
    </Container>
  );
}
