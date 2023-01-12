import { WithDefaultContext } from "./WithDefaultContext/WithDefaultContext";
import { WithPubSubContext } from "./WithPubSubContext/WithPubSubContext";

function App() {
  return (
    <div style={{ display: "flex", gap: 50 }}>
      <WithPubSubContext />
      <WithDefaultContext />
    </div>
  );
}
export default App;
