import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  border: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
`;

export const Tr = styled.tr`
  color: #06d6a0;

  &:nth-child(even) {
    background-color: #f8f8f8;
  }
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
  border: 1px solid #64748b;
  text-align: center;
  padding: 10px;
  color: #334155;
  font-size: 0.95rem;
  font-weight: 400;
`;
