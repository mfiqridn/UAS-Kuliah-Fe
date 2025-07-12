import React from "react";
import { StyledCard } from "./StyledAboutContent";

function Card({ title, content }) {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
}

export default Card;
