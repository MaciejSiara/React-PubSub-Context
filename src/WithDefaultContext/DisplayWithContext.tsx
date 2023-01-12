import React from "react";
import { Name } from "../types";
import { Display } from "../components/Display";

import { useExampleContext } from "./context/useExampleContext";

export const DisplayWithContext = ({ name }: { name: Name }) => {
  const ctx = useExampleContext();

  return <Display name={name} value={ctx[name]} />;
};
