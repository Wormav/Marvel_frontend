import notPictureImg from "../../assets/not-picture.png";
import { Container } from "./littleCard.styles";

export default function LittleCard({ data }) {
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
        <img className="imgLittle" src={notPictureImg} alt="" />
      ) : (
        <img className="imgLittle" src={urlPicture} alt="" />
      )}
      <p className="titleLittle">{data.title}</p>
    </Container>
  );
}
