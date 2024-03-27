export const sortByNameUserFirst = (members) => {
  const sortedMembers = members.toSorted((a, b) => {
    if (a.name.toLowerCase() === "you") {
      return -1;
    } else if (b.name.toLowerCase() === "you") {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedMembers;
};

export const filterMembersByIncome = (filterStr, memArr) => {
  if (!filterStr || !memArr?.length) return;
  switch (filterStr) {
    case "all":
      return sortByNameUserFirst(memArr);
    case "over600": {
      const over600 = memArr.filter((mem) => mem.income >= 600);
      return sortByNameUserFirst(over600);
    }
    case "under600": {
      const under600 = memArr.filter((mem) => mem.income < 600);
      return sortByNameUserFirst(under600);
    }
  }
};

export const searchMembersByName = (searchValue, memArr) => {
  if (!searchValue || !memArr?.length) return;
  const searchVal = searchValue.trim().toLowerCase();
  const searchResult = memArr.filter((mem) => {
    const memName = mem.name.toLowerCase();
    return memName.includes(searchVal);
  });
  if (searchResult?.length) {
    return searchResult;
  } else {
    return null;
  }
};

export const filterAndSearchMembers = (filterStr, searchValue, memArr) => {
  let resultMemArr = memArr.filterMembersByIncome(filterStr, memArr);
  if (searchValue) {
    resultMemArr = resultMemArr.searchMembersByName(searchValue, resultMemArr);
  }
  return resultMemArr;
};
