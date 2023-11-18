import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/user.context";
import CardOne from "../../components/CardOne/CardOne";
import { Container } from "./favoris.styles";

export default function Favoris() {
  const [favoris, setFavoris] = useState([]);

  const { user } = useContext(AuthContext);

  const type = useParams().type;

  useEffect(() => {
    if (user) {
      if (type === "heros") {
        setFavoris(user.account.favorites_hero || []);
      } else {
        setFavoris(user.account.favorites_comics || []);
      }
    }
  }, [user, type]);

  return (
    <Container>
      <>
        <ul>
          <Link
            className={type === "heros" ? "active link" : "link"}
            to="/favoris/heros"
          >
            Personnages
          </Link>
          <Link
            className={type === "comics" ? "active link" : "link"}
            to="/favoris/comics"
          >
            Comics
          </Link>{" "}
        </ul>
        <ul>
          {favoris.length > 0 &&
            favoris.map((item) => <CardOne key={item} id={item} type={type} />)}
        </ul>
        <p className="not-fav">
          {favoris.length === 0 && "Vous n'avez aucun favori"}
        </p>
      </>
    </Container>
  );
}
