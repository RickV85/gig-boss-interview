import { useState } from "react";

export default function BandSelect() {
  const [selectedBand, setSelectedBand] = useState("");

  const handleSelect = (selection) => {
    setSelectedBand(selection);
  };

  return (
    <select
      value={selectedBand}
      onChange={(e) => handleSelect(e.target.value)}
      className="band-select"
    >
      <option value={""} disabled>
        Income by Band
      </option>
      <option>Band 1</option>
      <option>Band 2</option>
      <option>Band 3</option>
    </select>
  );
}
