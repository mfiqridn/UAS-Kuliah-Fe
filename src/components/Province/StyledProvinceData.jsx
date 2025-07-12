import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  color: #10b981;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  text-align: center;
  color: #64748b;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
  border: 1px solid #64748b;
  text-align: center;
  padding: 10px;
  background-color: #06d6a0;
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;

export const Td = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid #e5e7eb;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb;
  }

  &:hover {
    background-color: #ecfdf5;
  }
`;
