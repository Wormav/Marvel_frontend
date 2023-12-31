import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "./layout.styles";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  const [location, setLocation] = useState();

  return (
    <Container>
      <NavBar setLocation={setLocation} />
      <Banner location={location} />
      <Outlet />
      <Footer />
    </Container>
  );
}
