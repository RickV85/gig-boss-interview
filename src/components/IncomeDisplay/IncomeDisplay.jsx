import { object } from "prop-types";

export default function IncomeDisplay({ selectedBand }) {
  const bandTotalIncome = () => {
    if (selectedBand) {
      return selectedBand.findBandIncomeForYear().toString();
    } else {
      return "0";
    }
  };

  const bandMemberIncomeDisplay = () => {
    if (selectedBand) {
      const memberIncome = selectedBand.members.map((mem, i) => {
        let name = mem.name;
        const income = mem.income;
        if (name.toLowerCase() === "you") {
          name = "My Income";
        }
        return <p key={`memIncome-${i}`}>{`${name}: $${income}`}</p>;
      });
      return memberIncome;
    } else {
      return null;
    }
  };

  const bandIncomeDisplay = () => {
    if (selectedBand) {
      return (
        <>
          <header className="income-display-header">
            <h3>{selectedBand.bandName}</h3>
            <div className="total-band-income-div">
              <h4>Total Band Income:</h4>
              <p>${bandTotalIncome()}</p>
            </div>
          </header>
          <div>{bandMemberIncomeDisplay()}</div>
        </>
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
