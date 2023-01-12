import React from "react";
import { Name } from "../../types";
import { useActions } from "./useActions";

export type IExampleContextState = {
  name: string;
  lastName: string;
  setNewFieldValue: (name: Name, value: string) => void;
};
export const Context = React.createContext<IExampleContextState>(
  {} as IExampleContextState
);

export const ExampleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  const { setNewFieldValue } = useActions({ setName, setLastName });

  return (
    <Context.Provider value={{ name, lastName, setNewFieldValue }}>
      {children}
    </Context.Provider>
  );
};
