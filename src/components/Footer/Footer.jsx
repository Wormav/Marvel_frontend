import { Container } from "./footer.styles";

export default function Footer() {
  return (
    <Container>
      <p>
        Made with React at{" "}
        <a
          href="https://www.lereacteur.io/"
          target="_blank"
          rel="author noreferrer"
        >
          Le Reacteur
        </a>{" "}
        By{" "}
        <a
          href="https://jeremy-lorette.com/"
          target="_blank"
          rel="author noreferrer"
        >
          Jérémy Lorette
        </a>
      </p>
    </Container>
  );
}
