import React from "react";
import { Name } from "../types";
import { TextInput } from "../components/TextInput";
import { useExampleContext } from "./context/useExampleContext";

export const TextInputWithContext = ({ name }: { name: Name }) => {
  const ctx = useExampleContext();

  const { setNewFieldValue, ...values } = useExampleContext();

  return (
    <TextInput
      name={name}
      value={values[name]}
      setNewValue={(e) => {
        setNewFieldValue(name, e.target.value);
      }}
    />
  );
};
