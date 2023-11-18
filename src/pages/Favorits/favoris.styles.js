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
    margin-top: 64px;
    gap: 32px;
  }

  .link {
    color: var(--secondary-color);
    font-size: 30px;
    text-decoration-line: none;

    &:hover {
      color: var(--primary-color);
      cursor: pointer;
    }
  }
  .active {
    color: var(--secondary-color);
    text-decoration-line: underline;
    text-underline-offset: 0.3em;
  }

  .not-fav {
    color: var(--secondary-color);
    font-size: 30px;
    text-align: center;
  }
`;
