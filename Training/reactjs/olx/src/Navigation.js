import React from "react";
import { HashRouter as  BrowserRouter, Routes , Route} from "react-router-dom";
import App from "./App";
import Sell from "./Sell";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/sell" element={<Sell />}></Route>
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}
