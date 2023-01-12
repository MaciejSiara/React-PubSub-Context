import React from "react";
import { TextInput } from "../components/TextInput";
import { Name } from "../types";
import { useExampleContext } from "./context/useExampleContext";

export const TextInputWithContext = ({ name }: { name: Name }) => {
  const { store: value, setNewFieldValue } = useExampleContext((s) => s[name]);

  console.log(value);
  return (
    <TextInput
      name={name}
      value={value}
      setNewValue={(e) => {
        setNewFieldValue(name, e.target.value);
      }}
    />
  );
};
