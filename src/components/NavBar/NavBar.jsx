import React, { useContext } from "react";
import { Container, Profile } from "./navbar.styles";
import MarvelLogo from "../../assets/marvel-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/user.context";

export default function NavBar({ setLocation }) {
  const navigate = useNavigate();
  const location = window.location.pathname;
  setLocation(location);

  const { user, handleLogout } = useContext(AuthContext);

  const handleClickLogout = () => {
    handleLogout();
    window.location.reload();
  };

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
          {user ? (
            <>
              <li className="logout" onClick={handleClickLogout}>
                Se déconnecter
              </li>
              <Profile>
                <span>{user.account.username.charAt(0).toUpperCase()}</span>
              </Profile>
            </>
          ) : (
            <>
              <li
                className={location === "/signup" ? "active" : ""}
                onClick={() => navigate("/signup")}
              >
                S'inscrire
              </li>
              <li
                className={location === "/login" ? "active" : ""}
                onClick={() => navigate("/login")}
              >
                Se connecter
              </li>
            </>
          )}
        </ul>
      </div>
    </Container>
  );
}
