import { Name } from "../types";

export const TextInput = ({
  setNewValue,
  value,
  name,
}: {
  setNewValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: Name;
}) => {
  return (
    <div className="field">
      {name}: <input value={value} onChange={setNewValue} />
    </div>
  );
};
