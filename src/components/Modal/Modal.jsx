import { Container } from "./modal.styles";
import notPictureImg from "../../assets/not-picture.png";
import axios from "../../config/axios.config";
import { useContext, useEffect, useState } from "react";
import LittleCard from "../LittleCard/LittleCard.jsx";
import { AuthContext } from "../../context/user.context.jsx";

export default function Modal({ open, setOpen, data, type }) {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isFavorite, setIsFavorite] = useState(false);

  const { user, update, setUpdate } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setIsFavorite(
        user.account.favorites_hero.includes(data._id) ||
          user.account.favorites_comics.includes(data._id)
      );
    }
  }, [user, data._id]);

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
  };

  const updateFavorite = async () => {
    try {
      await axios.put(
        `/api/user/update/${type}/${data._id}?method=${
          isFavorite ? "delete" : "add"
        }`
      );
      setUpdate(!update);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const response = await axios.get(`/api/comics/${data._id}`);
        setComicsData(response.data.comics);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (open && type === "heros") {
      fetchComicsData();
    }
  }, [data._id, open, type]);

  const notPicture =
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "image_not_available"
    ) ||
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "marvel/i/mg/f/60/4c002e0305708.gif"
    );

  const urlPicture = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  if (open) document.body.style.overflow = "hidden";

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Container open={open} onClick={closeModal}>
      <div className="content" onClick={stopPropagation}>
        <div className="close" onClick={closeModal}>
          X
        </div>
        <div className="main">
          <div>
            {notPicture ? (
              <img src={notPictureImg} alt="" />
            ) : (
              <img src={urlPicture} alt="" />
            )}
          </div>
          <div className="description">
            <p className="title">{data.name ? data.name : data.title}</p>
            <p className="description-text">{data.description}</p>
            {user ? (
              isFavorite ? (
                <button className="delete-fav" onClick={updateFavorite}>
                  Retirer des favoris
                </button>
              ) : (
                <button onClick={updateFavorite}>Ajouter aux favoris</button>
              )
            ) : (
              <p className="not-co">
                Connectez-vous pour ajouter ceci à vos favoris
              </p>
            )}
          </div>
        </div>
        <div className="comics">
          {loading ? (
            <div></div>
          ) : (
            comicsData.map((comic) => (
              <LittleCard key={comic._id} data={comic} />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
