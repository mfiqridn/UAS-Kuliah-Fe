import React from "react";
import { Container, StyledTable, Tr, Th, Td } from "./StyledTable";

const Table = ({ data }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <Tr>
            <Th>No</Th>
            <Th>Provinsi</Th>
            <Th>Positif</Th>
            <Th>Sembuh</Th>
            <Th>Dirawat</Th>
            <Th>Meninggal</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{item.numbers.confirmed}</Td>
              <Td>{item.numbers.recovered}</Td>
              <Td>{item.numbers.treatment}</Td>
              <Td>{item.numbers.death}</Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
