import { object } from "prop-types";
import { sortByNameUserFirst } from "../../utils/utils";

export default function MemberView({ bandRepo }) {
  const createAllMemberIncomeDisplay = () => {
    const sortedMemArr = sortByNameUserFirst(
      bandRepo.createYearlyTotalIncomeByMember()
    );
    const memberElements = sortedMemArr.map((mem, i) => (
      <p key={`allMemInc-${i}`}>{`${mem.name}: $${mem.income}`}</p>
    ));
    return memberElements;
  };

  return (
    <>
      <header className="income-display-header">
        <div className="mem-view-input-div">
          <input></input>
          <select></select>
        </div>
        <h3>All Members</h3>
        <h4>{`My Income: $${bandRepo.calcTotalUserIncome()}`}</h4>
      </header>
      <div className="income-display-members">
        {createAllMemberIncomeDisplay()}
      </div>
    </>
  );
}

MemberView.propTypes = {
  bandRepo: object,
};
