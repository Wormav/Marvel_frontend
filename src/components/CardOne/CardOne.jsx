import axios from "../../config/axios.config";
import React, { useEffect, useState } from "react";
import { Container } from "./cardOne.styles";
import notPictureImg from "../../assets/not-picture.png";
import Modal from "../Modal/Modal";

export default function CardOne({ id, type }) {
  const [data, setData] = useState(null); // Initialisez data à null
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [urlPicture, setUrlPicture] = useState("");
  const [notPicture, setNotPicture] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/one/${type}/${id}`);
        setData(response.data);
        setUrlPicture(
          `${response.data.thumbnail.path}.${response.data.thumbnail.extension}`
        );
        setNotPicture(
          `${response.data.thumbnail.path}.${response.data.thumbnail.extension}`.includes(
            "image_not_available"
          ) ||
            `${response.data.thumbnail.path}.${response.data.thumbnail.extension}`.includes(
              "marvel/i/mg/f/60/4c002e0305708.gif"
            )
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return (
    <>
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <Container onClick={() => setOpen(true)}>
          {data ? (
            <>
              {notPicture ? (
                <img src={notPictureImg} alt="" />
              ) : (
                <img src={urlPicture} alt="" />
              )}
              <span>{data.name}</span>
              <span>{data.title}</span>
            </>
          ) : null}
        </Container>
      )}
      {data ? (
        <Modal open={open} setOpen={setOpen} data={data} type={type} />
      ) : null}
    </>
  );
}
