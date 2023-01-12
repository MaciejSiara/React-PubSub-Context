import React from "react";

type UseStoreDataReturnType<Store> = {
  get: () => Store;
  set: (value: Partial<Store> | ((store: Store) => Partial<Store>)) => void;
  subscribe: (callback: () => void) => () => void;
};

export const createPubSubContext = <Store,>() => {
  function useStoreData(initState: Store): UseStoreDataReturnType<Store> {
    const store = React.useRef(initState);
    const subscribers = React.useRef(new Set<() => void>());

    const get: UseStoreDataReturnType<Store>["get"] = React.useCallback(
      () => store.current,
      []
    );
    const set: UseStoreDataReturnType<Store>["set"] = React.useCallback(
      (value) => {
        const newValues =
          typeof value === "function" ? value(store.current) : value;
        store.current = { ...store.current, ...newValues };
        subscribers.current.forEach((callback) => callback());
      },
      []
    );

    const subscribe: UseStoreDataReturnType<Store>["subscribe"] =
      React.useCallback((callback) => {
        subscribers.current.add(callback);
        return () => subscribers.current.delete(callback);
      }, []);

    return { get, set, subscribe };
  }

  const StoreContext =
    React.createContext<UseStoreDataReturnType<Store> | null>(null);

  function Provider({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: Store;
  }) {
    return (
      <StoreContext.Provider value={useStoreData(value)}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput = () => null as SelectorOutput
  ): {
    store: SelectorOutput;
    setStore: UseStoreDataReturnType<Store>["set"];
  } {
    const store = React.useContext(StoreContext);

    if (!store) {
      throw new Error("Store should be used inside Provider");
    }

    const [state, setState] = React.useState(selector(store.get()));

    React.useEffect(() => {
      // const callback = () => setState(selector(store.get()));
      // subscribers.current.add(callback);
      // return () => subscribers.current.delete(callback);
      return store.subscribe(() => setState(selector(store.get())));
    }, []);

    return {
      store: state,
      setStore: store.set,
    };
  }

  return {
    Provider,
    useStore,
  };
};
