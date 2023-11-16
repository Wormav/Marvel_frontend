import bannerHome from "../../assets/banner-home.png";
import { Container } from "./banner.styles";

export default function Banner() {
  return (
    <Container>
      <img src={bannerHome} alt="" />
    </Container>
  );
}
