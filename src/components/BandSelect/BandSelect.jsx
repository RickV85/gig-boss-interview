import { array, func, string } from "prop-types";

export default function BandSelect({ bands, selectedBand, setSelectedBand }) {
  const handleSelect = (value) => {
    setSelectedBand(value);
  };

  const createBandOptions = () => {
    if (bands && bands.length) {
      const bandOptions = bands.map((band, i) => (
        <option value={band.bandName} key={`bandOpt-${i}`}>
          {band.bandName}
        </option>
      ));
      return bandOptions;
    }
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
      {createBandOptions()}
    </select>
  );
}

BandSelect.propTypes = {
  bands: array,
  selectedBand: string,
  setSelectedBand: func,
};
