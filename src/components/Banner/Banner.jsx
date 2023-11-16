import bannerHome from "../../assets/banner-home.png";
import bannerCommics from "../../assets/banner-comics.png";
import { Container } from "./banner.styles";
import { useEffect, useState } from "react";

export default function Banner({ location }) {
  const [picture, setPicture] = useState();

  useEffect(() => {
    if (location === "/") {
      setPicture(bannerHome);
    } else if (location === "/comics") {
      setPicture(bannerCommics);
    }
  }, [location]);

  return (
    <Container>
      <img src={picture} alt="" />
    </Container>
  );
}
