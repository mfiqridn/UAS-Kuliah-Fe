import { createContext, useContext } from "react";

const CovidContext = createContext(null);

export const useCovid = () => useContext(CovidContext);

export default CovidContext;
