import { Name } from "../types";

export const Display = ({ name, value }: { value: string; name: Name }) => {
  return (
    <div className="value">
      {name}: {value}
    </div>
  );
};
