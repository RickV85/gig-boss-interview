import { object } from "prop-types";
import { useEffect, useState } from "react";
import { sortByNameUserFirst } from "../../utils/utils";

export default function MemberView({ bandRepo }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterSelection, setFilterSelection] = useState("all");
  const [memberDisplay, setMemberDisplay] = useState(undefined);

  const sortedMemArr = sortByNameUserFirst(
    bandRepo.createYearlyTotalIncomeByMember()
  );

  const createUnfilteredDisplay = (memArr) => {
    const memberElements = memArr.map((mem, i) => {
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

  const createFilteredDisplay = (memArr) => {
    const memberElements = memArr.map((mem, i) => (
      <p key={`allMemInc-${i}`}>{`${mem.name}: $${mem.income}`}</p>
    ));

    return memberElements;
  };

  useEffect(() => {
    const initialMemDisplay = createUnfilteredDisplay(sortedMemArr);
    setMemberDisplay(initialMemDisplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (searchValue) {
  //     const searchResult = searchMemElementsByName(searchValue, memberDisplay);
  //     if (searchResult) {
  //       const resultDisplay = (
  //         <>
  //           <h4>Search by name results</h4>
  //           {searchResult}
  //         </>
  //       );
  //       setSearchDisplay(resultDisplay);
  //     } else {
  //       setSearchDisplay(<h4>No search results</h4>);
  //     }
  //   } else {
  //     setSearchDisplay(null);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchValue, filterSelection]);

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
        {memberDisplay}
      </div>
    </>
  );
}

MemberView.propTypes = {
  bandRepo: object,
};
