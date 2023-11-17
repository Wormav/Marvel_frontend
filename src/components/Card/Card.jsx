import { Container } from "./card.styles";
import notPictureImg from "../../assets/not-picture.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Card({ data }) {
  const [open, setOpen] = useState(false);

  const notPicture =
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "image_not_available"
    ) ||
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "marvel/i/mg/f/60/4c002e0305708.gif"
    );

  const urlPicture = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <>
      <Container onClick={() => setOpen(true)}>
        {notPicture ? (
          <img src={notPictureImg} alt="" />
        ) : (
          <img src={urlPicture} alt="" />
        )}
        <span>{data.name}</span>
        <span>{data.title}</span>
      </Container>
      <Modal open={open} setOpen={setOpen} data={data} />
    </>
  );
}
