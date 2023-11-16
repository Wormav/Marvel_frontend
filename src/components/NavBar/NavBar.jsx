import React from "react";
import { Container, Profile } from "./navbar.styles";
import MarvelLogo from "../../assets/marvel-logo.png";
import { useNavigate } from "react-router-dom";

export default function NavBar({ setLocation }) {
  const navigate = useNavigate();
  const location = window.location.pathname;
  setLocation(location);

  return (
    <Container>
      <img
        onClick={() => navigate("/")}
        src={MarvelLogo}
        alt="logo de Marvel"
      />
      <div>
        <ul>
          <li
            className={location === "/" ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Personnages
          </li>
          <li
            className={location === "/comics" ? "active" : ""}
            onClick={() => navigate("/comics")}
          >
            Comics
          </li>
          <li
            className={location === "/favoris" ? "active" : ""}
            onClick={() => navigate("/favoris")}
          >
            Favoris
          </li>
          <Profile>
            <span>W</span>
          </Profile>
        </ul>
      </div>
    </Container>
  );
}
