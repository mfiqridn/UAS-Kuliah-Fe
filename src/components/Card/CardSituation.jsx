import React from "react";
import {
  Container,
  FlexGrid,
  Card,
  RegionTitle,
  StatRow,
  StatContent,
  StatLabel,
  StatValue,
  StatIcon,
} from "./StyledCardSituation";

const CardSituationRegions = ({ data }) => {
  return (
    <Container>
      <FlexGrid>
        {data.map((item, index) => (
          <Card key={index}>
            <RegionTitle>{item.name}</RegionTitle>

            <StatRow>
              <StatContent>
                <StatLabel>Confirmed</StatLabel>
                <StatValue color="#06d6a0">
                  {item.numbers.confirmed.toLocaleString("id-ID")}
                </StatValue>
                <StatIcon>😷</StatIcon>
              </StatContent>
            </StatRow>

            <StatRow>
              <StatContent>
                <StatLabel>Recovered</StatLabel>
                <StatValue color="#118ab2">
                  {item.numbers.recovered.toLocaleString("id-ID")}
                </StatValue>
                <StatIcon>❤️‍🩹</StatIcon>
              </StatContent>
            </StatRow>

            <StatRow>
              <StatContent>
                <StatLabel>Death</StatLabel>
                <StatValue color="#ef476f">
                  {item.numbers.death.toLocaleString("id-ID")}
                </StatValue>
                <StatIcon>💀</StatIcon>
              </StatContent>
            </StatRow>
          </Card>
        ))}
      </FlexGrid>
    </Container>
  );
};

export default CardSituationRegions;
