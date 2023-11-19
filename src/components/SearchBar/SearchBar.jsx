import React, { useState } from "react";
import { Container } from "./searchBar.styles";

export default function SearchBar({ setSearchInput, autocomplete }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && autocomplete) {
      e.preventDefault();
      setInputValue(autocomplete);
      setSearchInput(autocomplete);
    }
  };

  return (
    <Container>
      <div className="point" />
      <input
        type="text"
        placeholder="Rechercher"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {inputValue && autocomplete && inputValue !== autocomplete && (
        <div className="autocomplete-suggestion">{autocomplete}</div>
      )}
      <div className="point" />
    </Container>
  );
}
