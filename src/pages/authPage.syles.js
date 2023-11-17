import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: white;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
  }

  input {
    width: 200px;
    height: 30px;
    border-radius: 15px;
    padding: 8px;

    &:focus {
      border: 3px solid var(--secondary-color);
    }
  }

  button {
    border: none;
    background-color: green;
    color: white;
    padding: 8px 16px;
    border-radius: 15px;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 15px white;
    }
  }

  .link {
    color: var(--secondary-color);

    &:hover {
      cursor: pointer;
      text-shadow: 0 0 15px white;
    }
  }

  .alert {
    color: royalblue;
    font-size: 20px;
  }
`;
