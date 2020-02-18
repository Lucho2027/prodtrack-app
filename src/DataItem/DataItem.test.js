import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DataItem from "./DataItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <DataItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
