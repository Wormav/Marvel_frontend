import { Container } from "./card.styles";
import notPictureImg from "../../assets/not-picture.png";

export default function Card({ data }) {
  console.log(data);

  const notPicture =
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "image_not_available"
    ) ||
    `${data.thumbnail.path}.${data.thumbnail.extension}`.includes(
      "marvel/i/mg/f/60/4c002e0305708.gif"
    );

  const urlPicture = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <Container>
      {notPicture ? (
        <img src={notPictureImg} alt="" />
      ) : (
        <img src={urlPicture} alt="" />
      )}
      <span>{data.name}</span>
    </Container>
  );
}
