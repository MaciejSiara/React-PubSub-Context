import React from "react";
import { useExampleContext } from "./context/useExampleContext";

export const Other = () => {
  const { setNewFieldValue } = useExampleContext();
  return (
    <button onClick={() => setNewFieldValue("name", "CLICKED!")}>
      click me!
    </button>
  );
};
