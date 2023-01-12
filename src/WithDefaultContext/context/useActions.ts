import React from "react";
import { Name } from "../../types";
import { IExampleContextState } from "./ExampleContext";

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
};

export const useActions = ({ setName, setLastName }: Props) => {
  const setNewFieldValue: IExampleContextState["setNewFieldValue"] = (
    name,
    value
  ) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      default:
        throw new Error("wrong field name given");
    }
  };

  return { setNewFieldValue };
};
