import React from "react";
import { ExampleContextProvider } from "./context/ExampleContext";
import { DisplayWithContext } from "./DisplayWithContext";
import { Other } from "./Other";
import { TextInputWithContext } from "./TextInputWithContext";

export const WithDefaultContext = () => {
  return (
    <div className="container">
      <h5>With default store context</h5>
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
