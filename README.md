# React Pub-Sub context
React context built on top of publisher-subscriber design pattern.

### Usage
```jsx
type IStore = { name: string; lastName: string };

const { Provider, useStore } = createPubSubContext<IStore>();

const ExampleContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: IStore = { name: "", lastName: "" };

  return <Provider value={initialState}>{children}</Provider>;
};

const useExampleContext = <SelectorOutput>( selector: (store: IStore) => SelectorOutput
) => {
  const { store, setStore } = useStore(selector);

  const setNewFieldValue = (name: Name, value: string) => {
    setStore({ [name]: value });
  };
  return { setNewFieldValue, store };
};
```