import { object } from "prop-types";

export default function IncomeDisplay({ selectedBand }) {
  const bandTotalIncome = () => {
    if (selectedBand) {
      return selectedBand.findBandIncomeForYear().toString();
    } else {
      return "0";
    }
  };
  const bandIncomeDisplay = () => {
    if (selectedBand) {
      return (
        <div>
          <h3>{selectedBand.bandName}</h3>
          <div>
            <h4>Total Band Income</h4>
            <h4>{bandTotalIncome()}</h4>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <section className="income-display">
      {selectedBand ? (
        bandIncomeDisplay()
      ) : (
        <p>Select a band above to view the books!</p>
      )}
    </section>
  );
}

IncomeDisplay.propTypes = {
  selectedBand: object,
};
