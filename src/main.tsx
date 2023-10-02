import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./assets/styles/global.css";
import { Router } from "./components/router.tsx";
import { Header } from "./components/header/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Container>
        <Router />
      </Container>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

