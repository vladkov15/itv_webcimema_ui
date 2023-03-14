import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from ".";
import AccordionPage from "./Accordion";
import AlertPage from "./Alert";
import BadgePage from "./Badge";
import ButtonPage from "./Button";
import DropdownPage from "./Dropdown";
import LoaderPage from "./Loader";
import ModalPage from "./Modal";
import TabsPage from "./Tabs";
import TogglePage from "./Toggle";

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
          <Route path="/Dropdown" element={<DropdownPage/>}/>
          <Route path="/Loader" element={<LoaderPage/>}/>
          <Route path="/Modal" element={<ModalPage />}/>
          <Route path="/Tabs" element={<TabsPage />} />
          <Route path="/Toggle" element={<TogglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRoutes;
