import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from ".";
import AccordionPage from "./Accordion";
import AlertPage from "./Alert";
import BadgePage from "./Badge";
import ButtonPage from "./Button";

const PageRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/Accordion" element={<AccordionPage />} />
          <Route path="/Alert" element={<AlertPage />} />
          <Route path="/Button" element={<ButtonPage/>}/>
          <Route path="/Badge" element={<BadgePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRoutes;
