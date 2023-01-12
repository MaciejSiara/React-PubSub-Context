import React from "react";
import { createPubSubContext } from "../../createPubSubContext";

export type IExampleContextState = {
  name: string;
  lastName: string;
};
export const { Provider, useStore } =
  createPubSubContext<IExampleContextState>();

export const ExampleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState = { name: "", lastName: "" };

  return <Provider value={initialState}>{children}</Provider>;
};
