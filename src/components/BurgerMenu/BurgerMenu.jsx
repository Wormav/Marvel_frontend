import { useContext, useEffect, useState } from "react";
import { StyledBurger, StyledMenu } from "./burgerMenu.styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/user.context";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [open]);

  const handleClickLogout = () => {
    handleLogout();
    window.location.reload();
  };

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="element" />
      <div className="element" />
      <div className="element" />
      <StyledMenu open={open}>
        <Link className="link" to="/">
          Personnages
        </Link>
        <Link className="link" to="/comics">
          Comics
        </Link>
        <Link className="link" to="/favoris/heros">
          Favoris
        </Link>
        {user ? (
          <Link onClick={handleClickLogout} className="link">
            Se déconnecter
          </Link>
        ) : (
          <>
            <Link className="link" to="/login">
              Se connecter
            </Link>
            <Link className="link" to="/signup">
              S'inscrire
            </Link>
          </>
        )}
      </StyledMenu>
    </StyledBurger>
  );
};

export default BurgerMenu;
