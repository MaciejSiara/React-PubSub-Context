import React from "react";
import { Context } from "./ExampleContext";

export const useExampleContext = <SelectorOutput>() => {
  return React.useContext(Context);
};
