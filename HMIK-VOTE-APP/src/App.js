import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataJobProvider } from "./context/dataContext";
import Form from "./views/pages/calon";

import Home from "./views/pages/home";
import Result from "./views/pages/result";
// import Result from './views/pages/result';
import End from "./views/pages/thanks";
import Token from "./views/pages/token";

const App = () => (
  <>
    <BrowserRouter>
      <DataJobProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/token" element={<Token />} />
          <Route exact path="/calon" element={<Form />} />
          <Route exact path="/end" element={<End />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </DataJobProvider>
    </BrowserRouter>
  </>
);

export default App;
