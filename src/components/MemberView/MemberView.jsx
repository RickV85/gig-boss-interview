import { object } from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { filterAndSearchMembers, sortByNameUserFirst } from "../../utils/utils";

export default function MemberView({ bandRepo }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterSelection, setFilterSelection] = useState("all");
  const [memberDisplay, setMemberDisplay] = useState(undefined);

  const sortedMemIncArr = useMemo(() => {
    const memIncomeArr = bandRepo.createYearlyTotalIncomeByMember();
    return sortByNameUserFirst(memIncomeArr);
  }, [bandRepo]);

  const createDispElementsFromMemArr = (memArr, filterStr) => {
    if (memArr?.length) {
      const memberElements = memArr.map((mem, i) => {
        let memClass = "member-income";
        // Create styled elements to highlight users with >= $600 income
        if (mem.income >= 600 && filterStr === "all") {
          memClass += " over-600";
        }
        return (
          <p
            className={memClass}
            key={`memInc-${i}`}
          >{`${mem.name}: $${mem.income}`}</p>
        );
      });
      return memberElements;
    }
  };

  useEffect(() => {
    // Apply filter and search by name utils to create results
    if (sortedMemIncArr?.length) {
      let filterAndSearchMemResults = filterAndSearchMembers(
        filterSelection,
        searchValue,
        sortedMemIncArr
      );

      // Convert results to elements, if none, show no results found
      if (filterAndSearchMemResults?.length) {
        filterAndSearchMemResults = createDispElementsFromMemArr(
          filterAndSearchMemResults,
          filterSelection
        );
      } else {
        return setMemberDisplay(<h4>No search results</h4>);
      }

      // If a search value, indicate the user is searching by name on DOM
      if (searchValue) {
        const resultDisplay = (
          <>
            <h4>Search by name results</h4>
            {filterAndSearchMemResults}
          </>
        );
        setMemberDisplay(resultDisplay);
      } else {
        setMemberDisplay(filterAndSearchMemResults);
      }
    } else {
      // If no members in sortedMemIncArr show message to user
      return <h4>No members to display</h4>;
    }
  }, [searchValue, filterSelection, sortedMemIncArr]);

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
