import styled from "styled-components";

export const Container = styled.div`
  .imgLittle {
    width: 150px;
    height: 200px;
    margin: 0;
    box-shadow: none;

    @media (max-width: 768px) {
      width: 100px;
      height: 150px;
    }
  }

  p {
    margin: 0;
    font-size: 15px;
  }
`;
