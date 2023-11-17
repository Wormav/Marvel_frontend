import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 64px;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    p {
      font-size: 20px;
      color: var(--secondary-color);
    }

    button {
      color: var(--secondary-color);
      background: transparent;
      border: none;
      font-size: 20px;

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;
