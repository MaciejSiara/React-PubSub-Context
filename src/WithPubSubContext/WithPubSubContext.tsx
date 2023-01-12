import React from "react";
import { TextInput } from "../components/TextInput";
import { DisplayWithContext } from "./DisplayWithContext";
import { ExampleContextProvider } from "./context/ExampleContext";
import { TextInputWithContext } from "./TextInputWithContext";
import { Other } from "./Other";

export const WithPubSubContext = () => {
  return (
    <div className="container">
      <h5>With PubSub Ref store context</h5>
      <div className="container">
        <h5>ContentContainer</h5>
        <ExampleContextProvider>
          <div className="container">
            <h5>FormContainer</h5>
            <TextInputWithContext name={"name"} />
            <TextInputWithContext name={"lastName"} />
          </div>
          <div className="container">
            <h5>DisplayContainer</h5>
            <DisplayWithContext name={"name"} />
            <DisplayWithContext name={"lastName"} />
          </div>
          <Other />
        </ExampleContextProvider>
      </div>
    </div>
  );
};
