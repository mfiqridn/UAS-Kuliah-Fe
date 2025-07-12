import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 30px;
  width: 100%;
  max-width: 320px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const RegionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #101828;
`;

export const StatRow = styled.div`
  margin-bottom: 1.2rem;
`;

export const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StatLabel = styled.span`
  flex: 1;
  flex-direction: column;
  text-align: left;
  font-weight: 400;
  color: #475569;
  font-size: 1rem;
`;

export const StatValue = styled.span`
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(props) => props.color || "#000"};
`;

export const StatIcon = styled.span`
  flex: 0;
  text-align: right;
  font-size: 1.4rem;
  opacity: 0.75;
`;
