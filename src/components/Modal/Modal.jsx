import { Container } from "./modal.styles";
import notPictureImg from "../../assets/not-picture.png";
import axios from "../../config/axios.config";
import { useEffect, useState } from "react";
import LittleCard from "../LittleCard/LittleCard.jsx";

function Modal({ open, setOpen, data }) {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
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

    if (open) {
      fetchComicsData();
    }
  }, [data._id, open]);

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
      {loading ? (
        <div className="loading">Chargement en cours...</div>
      ) : (
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
              <button>Ajouter aux favoris</button>
            </div>
          </div>
          <div className="comics">
            {comicsData.map((comic) => (
              <LittleCard key={comic._id} data={comic} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Modal;
