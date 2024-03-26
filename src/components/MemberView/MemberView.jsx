import { object } from "prop-types";
import { sortByNameUserFirst } from "../../utils/utils";
import { useState } from "react";

export default function MemberView({ bandRepo }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterSelection, setFilterSelection] = useState("all");

  const createAllMemberIncomeDisplay = () => {
    const sortedMemArr = sortByNameUserFirst(
      bandRepo.createYearlyTotalIncomeByMember()
    );

    const memberElements = sortedMemArr.map((mem, i) => {
      let memClass = "mem-inc";
      if (mem.income >= 600) {
        memClass += " over-600";
      }
      return (
        <p
          className={memClass}
          key={`allMemInc-${i}`}
        >{`${mem.name}: $${mem.income}`}</p>
      );
    });
    return memberElements;
  };

  return (
    <>
      <header className="income-display-header">
        <div className="mem-view-input-div">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search by name"
            className="mem-view-input"
          />
          <select
            value={filterSelection}
            onChange={(e) => setFilterSelection(e.target.value)}
            className="mem-view-select"
          >
            <option value={"all"}>All Members</option>
            <option value={"over600"}>{`Members >= $600`}</option>
            <option value={"under600"}>{`Members < $600`}</option>
          </select>
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
