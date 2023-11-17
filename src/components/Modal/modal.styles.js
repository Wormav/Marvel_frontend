import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    min-width: 80%;
    max-width: 95%;
    min-height: 80%;
    height: fit-content;
    max-height: 80%;
    background-color: var(--background-color);
    border: 2px solid var(--secondary-color);
    box-shadow: 0 0 15px white;
    opacity: 1;
    border-bottom: 2px solid var(--secondary-color);

    @media (max-width: 768px) {
      max-height: 95%;
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--secondary-color);
    margin: 16px 0;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #888;
    background-color: white;
    border-radius: 30px;
    padding: 4px 12px;
    border: 2px solid var(--secondary-color);

    &:hover {
      background-color: var(--secondary-color);
      color: white;
    }
  }

  img {
    width: 200px;
    height: 300px;
    border: 2px solid var(--secondary-color);
    box-shadow: 0 0 15px white;
    margin: 16px;
    object-fit: cover;
    max-height: 70vh;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      margin-bottom: 0;
    }
  }

  .description {
    text-align: center;
    margin: 16px;

    .title {
      font-size: 30px;
    }

    .description-text {
      text-overflow: ellipsis;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 18px;
        max-height: 50%;
      }
    }
  }

  .comics {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 16px;
    width: 100%;
    height: 500px;
    gap: 16px;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }

    > * {
      margin: 0 8px;
    }
  }

  p {
    font-size: 24px;
    color: white;
  }

  button {
    border: none;
    background-color: green;
    color: white;
    padding: 8px;
    border-radius: 10px;

    &:hover {
      opacity: 1.5;
      cursor: pointer;
      box-shadow: 0 0 15px white;
    }
  }
`;
