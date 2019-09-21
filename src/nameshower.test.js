import React from "react";
import ReactDOM from "react-dom";
import NameShower from "./nameshower";
import { exportAllDeclaration } from "@babel/types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NameShower />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("some failure", () => {
  expect(true).toBe(false);
});
