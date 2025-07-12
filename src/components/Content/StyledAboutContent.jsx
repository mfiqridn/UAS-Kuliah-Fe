import styled from "styled-components";

export const AboutSection = styled.section`
  font-family: "Poppins", sans-serif;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    color: #00cba9;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #118ab2;
  }

  p {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
  }
`;
