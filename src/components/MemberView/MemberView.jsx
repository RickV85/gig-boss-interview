import { object } from "prop-types";
import { sortByNameUserFirst } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function MemberView({ bandRepo }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterSelection, setFilterSelection] = useState("all");
  const [memberDisplay, setMemberDisplay] = useState(undefined);

  const sortedMemArr = sortByNameUserFirst(
    bandRepo.createYearlyTotalIncomeByMember()
  );

  const createUnfilteredDisplay = () => {
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

  const createFilteredDisplay = (arr) => {
    const memberElements = arr.map((mem, i) => (
      <p key={`allMemInc-${i}`}>{`${mem.name}: $${mem.income}`}</p>
    ));

    return memberElements;
  };

  const updateMemberDisplay = () => {
    if (!sortedMemArr) return;
    switch (filterSelection) {
      case "all":
        return setMemberDisplay(createUnfilteredDisplay());
      case "over600": {
        const over600 = sortedMemArr.filter((mem) => mem.income >= 600);
        return setMemberDisplay(createFilteredDisplay(over600));
      }
      case "under600": {
        const under600 = sortedMemArr.filter((mem) => mem.income < 600);
        return setMemberDisplay(createFilteredDisplay(under600));
      }
    }
  };

  useEffect(() => {
    updateMemberDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSelection]);

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
      <div className="income-display-members">{memberDisplay}</div>
    </>
  );
}

MemberView.propTypes = {
  bandRepo: object,
};
