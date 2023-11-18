import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--primary-color);
  color: var(--secondary-color);
  font-size: 20px;
  padding: 16px 0;
  width: 100%;
  margin-top: 32px;

  a {
    text-decoration: none;
    color: var(--secondary-color);
    &:hover {
      cursor: pointer;
      color: var(--primary-color);
    }
  }
`;
