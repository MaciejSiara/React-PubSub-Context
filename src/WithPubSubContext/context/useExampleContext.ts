import { Name } from "../../types";
import { IExampleContextState, useStore } from "./ExampleContext";

export const useExampleContext = <SelectorOutput>(
  selector: (store: IExampleContextState) => SelectorOutput = () =>
    null as SelectorOutput
) => {
  const { store, setStore } = useStore(selector);

  const setNewFieldValue = (name: Name, value: string) => {
    setStore({ [name]: value });
  };
  return { setNewFieldValue, store };
};
