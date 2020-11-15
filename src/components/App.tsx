import { Router } from "@reach/router";
import React from "react";
import Home from "./Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const App: React.FC = () => (
  <Router>
    <Home path="/" />
    <PageOne path="/page1" />
    <PageTwo path="/page2" />
    <PageThree path="/page3" />
  </Router>
);

export default App;
