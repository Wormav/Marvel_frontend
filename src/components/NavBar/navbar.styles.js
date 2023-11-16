import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  color: white;

  img {
    width: 150px;
    height: 120px;
    margin-left: 16px;

    &:hover {
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 32px;
    margin-right: 16px;
    font-size: 25px;
  }

  li {
    &:hover {
      cursor: pointer;
    }
  }

  .active {
    color: var(--secondary-color);
    text-decoration-line: underline;
    text-underline-offset: 0.3em;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin-left: 32px;

  &:hover {
    cursor: pointer;
  }
`;
