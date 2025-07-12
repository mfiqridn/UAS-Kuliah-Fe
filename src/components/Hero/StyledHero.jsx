import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 6rem;
  font-family: "Poppins", sans-serif;

  @media (min-width: 992px) {
    margin: 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const HeroLeft = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;

  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

export const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

export const HeroTitle = styled.h1`
  color: #00cba9;
  margin-bottom: 0.6rem;
  font-size: 3.86rem;
  font-weight: 600;
`;

export const HeroSubtitle = styled.p`
  color: #118ab2;
  margin-bottom: 1.2rem;
  font-size: 1.59rem;
`;

export const HeroDescription = styled.p`
  color: black;
  margin-bottom: 1rem;
`;

export const HeroButton = styled.button`
  font-size: 1.8rem;
  background-color: #00cba9;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
`;

export const HeroImage = styled.img`
  max-width: 100%;
`;
