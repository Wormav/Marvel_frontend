import bannerHome from "../../assets/banner-home.png";
import bannerCommics from "../../assets/banner-comics.png";
import bannerFavoris from "../../assets/banner-favoris.png";
import bannerAuth from "../../assets/banner-auth.png";
import { Container } from "./banner.styles";
import { useEffect, useState } from "react";

export default function Banner({ location }) {
  const [picture, setPicture] = useState();

  useEffect(() => {
    if (location === "/") {
      setPicture(bannerHome);
    } else if (location === "/comics") {
      setPicture(bannerCommics);
    } else if (
      location === "/favoris/heros" ||
      location === "/favoris/comics"
    ) {
      setPicture(bannerFavoris);
    } else if (location === "/signup" || location === "/login") {
      setPicture(bannerAuth);
    }
  }, [location]);

  return (
    <Container>
      <img src={picture} alt="" />
    </Container>
  );
}
