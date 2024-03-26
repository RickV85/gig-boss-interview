import { object } from "prop-types";
import { sortByNameUserFirst } from "../../utils/utils";
export default function IncomeDisplay({ selectedBand }) {
  const bandTotalIncome = () => {
    return selectedBand.findBandIncomeForYear().toString();
  };

  const bandMemberIncomeDisplay = () => {
    const sortedMembers = sortByNameUserFirst(selectedBand.members);
    const memberIncome = sortedMembers.map((mem, i) => {
      let name = mem.name;
      const income = mem.income;
      if (name.toLowerCase() === "you") {
        name = "My Income";
      }
      return <p key={`memIncome-${i}`}>{`${name}: $${income}`}</p>;
    });
    return memberIncome;
  };

  return (
    <>
      <header className="income-display-header">
        <h3>{selectedBand.bandName}</h3>
        <div className="total-band-income-div">
          <h4>Total Band Income:</h4>
          <p>${bandTotalIncome()}</p>
        </div>
      </header>
      <div className="income-display-members">{bandMemberIncomeDisplay()}</div>
    </>
  );
}

IncomeDisplay.propTypes = {
  selectedBand: object,
};
