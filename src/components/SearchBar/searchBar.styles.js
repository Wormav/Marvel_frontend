import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  background-color: var(--secondary-color);
  width: 60%;
  height: 70px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px var(--secondary-color);

  .point {
    background-color: var(--background-color);
    height: 10px;
    width: 10px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px var(--background-color);
  }

  input {
    background-color: var(--background-color);
    border: none;
    color: white;
    border-radius: 30px;
    width: 70%;
    height: 50%;
    padding: 5px 16px;
    box-shadow: 0px 0px 10px 0px var(--background-color);
  }

  .autocomplete-suggestion {
    position: absolute;
    color: gray;
    right: 20%;
    max-width: 10%;
    max-height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
