import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DataSummary from "./DataSummary";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <DataSummary />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
