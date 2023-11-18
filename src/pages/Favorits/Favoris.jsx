import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/user.context";
import CardOne from "../../components/CardOne/CardOne";

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
    <div>
      {favoris.length > 0 &&
        favoris.map((item) => <CardOne key={item} id={item} type={type} />)}
    </div>
  );
}
