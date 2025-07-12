import styled from "styled-components";

export const Column = styled.div`
  flex: 1;
  padding: 0 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

export const CardContainer = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 5%;
  text-align: center;
  background-color: #ffffff;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 992px) {
    padding: 25px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const CardTotal = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.color};

  @media screen and (max-width: 992px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: #0f172a;
`;
