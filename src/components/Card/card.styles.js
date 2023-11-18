import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--secondary-color);
  width: 200px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid var(--primary-color);
  box-shadow: 0px 0px 10px 0px var(--secondary-color);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: 0px 0px 20px 0px var(--secondary-color);
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);

    @media (max-width: 768px) {
      transform: none;
      box-shadow: 0px 0px 20px 0px var(--secondary-color);
    }
  }

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0;
  }

  span {
    text-align: center;
    text-overflow: ellipsis;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
