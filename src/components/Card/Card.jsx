import React from "react";
import { Column, CardContainer, CardTitle, CardTotal } from "./StyledCard";

const Card = ({ data, status }) => {
  const formattedData = data ? data.toLocaleString("id-ID") : "-";

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "#06D6A0";
      case "recovered":
        return "#118AB2";
      case "death":
        return "#EF476F";
      default:
        return "#6b7280";
    }
  };

  return (
    <Column>
      <CardContainer>
        <CardTitle>{status}</CardTitle>
        <CardTotal color={getStatusColor(status)}>{formattedData}</CardTotal>
      </CardContainer>
    </Column>
  );
};

export default Card;
