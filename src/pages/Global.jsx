import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../utils/constants/Endpoints";
import Card from "../components/Card/Card";
import styled from "styled-components";
import CardSituationRegions from "../components/Card/CardSituation";

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #10b981;
  font-size: 3rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 6rem;
`;

const Global = () => {
  const [covids, setCovids] = useState({
    last_update: "",
    global: [],
    regions: [],
  });

  useEffect(() => {
    async function getDataCovidGlobal() {
      try {
        const response = await axios.get(ENDPOINTS.GLOBAL);
        setCovids({
          last_update: response.data.last_update,
          global: response.data.global,
          regions: response.data.regions,
        });
        console.log("Global data fetched successfully:", response);
      } catch (error) {
        console.error("Failed to fetch global data:", error);
        setCovids({
          last_update: "",
          global: [],
          regions: [],
        });
      }
    }

    getDataCovidGlobal();
  }, []);

  const { global, regions } = covids;

  return (
    <>
      <Section>
        <Title>Global Situation</Title>
        <Subtitle>Data Covid Berdasarkan Global</Subtitle>
        <CardsContainer>
          {global.length > 0 ? (
            global.map((item, index) => (
              <Card key={index} data={item.total} status={item.status} />
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </CardsContainer>
      </Section>

      <Section>
        <Title>Situation by Regions</Title>
        <Subtitle>Bacaan Pilihan Covid</Subtitle>
        <CardSituationRegions data={regions} />
      </Section>
    </>
  );
};

export default Global;
