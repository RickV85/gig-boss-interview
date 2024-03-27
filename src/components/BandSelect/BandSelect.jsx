import { array, func, string, PropTypes } from "prop-types";

export default function BandSelect({
  bands,
  selectedBandName,
  setSelectedBandName,
  bandSelectRef,
}) {
  const handleSelect = (value) => {
    setSelectedBandName(value);
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
      id="bandSelect"
      value={selectedBandName}
      onChange={(e) => handleSelect(e.target.value)}
      className="band-select"
      ref={bandSelectRef}
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
  selectedBandName: string,
  setSelectedBandName: func,
  bandSelectRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
