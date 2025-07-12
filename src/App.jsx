import { Route, Routes } from "react-router";
import HomePage from "./pages/Global";
import CovidIndo from "./pages/Indonesia";
import CovidIndoProvince from "./pages/Province";
import AboutCovid from "./pages/About";
import Layout from "./Layout";
import { useState } from "react";
import CovidContext from "./context/CovidContext";
import data from "./utils/data/provinces";

function App() {
  const [covids, setCovids] = useState(data.provinces);

  const contextValue = {
    covids,
    setCovids,
  };
  return (
    <>
      <CovidContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Indonesia" element={<CovidIndo />}></Route>
            <Route path="/Province" element={<CovidIndoProvince />}></Route>
            <Route path="/About" element={<AboutCovid />}></Route>
          </Routes>
        </Layout>
      </CovidContext.Provider>
    </>
  );
}

export default App;
