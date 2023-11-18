import styled from "styled-components";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  right: 35px;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  .element {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--secondary-color);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 11;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "scale(0)" : "scale(1)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: all 0.3s linear;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 10;

  .link {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 30px;
  }
`;
