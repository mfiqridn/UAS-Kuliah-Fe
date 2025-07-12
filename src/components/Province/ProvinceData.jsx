import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Table,
  Tr,
  Th,
  Td,
} from "./StyledProvinceData";

const Province = ({ provinces }) => {
  return (
    <Container>
      <Title>Provinsi</Title>
      <Subtitle>Data Covid Berdasarkan Provinsi</Subtitle>
      <Table>
        <thead>
          <Tr>
            <Th>No</Th>
            <Th>Provinsi</Th>
            <Th>Positif</Th>
            <Th>Sembuh</Th>
            <Th>Meninggal</Th>
            <Th>Dirawat</Th>
          </Tr>
        </thead>
        <tbody>
          {provinces.map((provinsi, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{provinsi.kota}</Td>
              <Td>{provinsi.positif.toLocaleString("id-ID")}</Td>
              <Td>{provinsi.sembuh.toLocaleString("id-ID")}</Td>
              <Td>{provinsi.meninggal.toLocaleString("id-ID")}</Td>
              <Td>{provinsi.dirawat.toLocaleString("id-ID")}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Province;
