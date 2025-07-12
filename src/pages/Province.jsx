import Provinces from "../components/Province/ProvinceData";
import { useCovid } from "../context/CovidContext";
import FormCovid from "../components/FormCovid/FormCovid";

const ProvincePage = () => {
  const { covids } = useCovid();

  return (
    <>
      <Provinces provinces={covids} />
      <FormCovid />
    </>
  );
};

export default ProvincePage;
