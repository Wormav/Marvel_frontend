import React from "react";
import { Container } from "./searchBar.styles";

export default function SearchBar({ setSearchInput }) {
  return (
    <Container>
      <div className="point" />
      <input
        type="text"
        placeholder="Rechercher"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="point" />
    </Container>
  );
}
