import React from "react";
import { Display } from "../components/Display";
import { Name } from "../types";
import { useExampleContext } from "./context/useExampleContext";

export const DisplayWithContext = ({ name }: { name: Name }) => {
  const { store: value } = useExampleContext((s) => s[name]);

  return <Display name={name} value={value} />;
};
