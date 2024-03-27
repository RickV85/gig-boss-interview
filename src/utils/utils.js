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

export const searchMemElementsByName = (value, elementArr) => {
  if (value && elementArr?.length) {
    const searchVal = value.trim().toLowerCase();
    const searchResult = elementArr.filter((element) => {
      const name = element.props.children.split(":")[0].toLowerCase();
      return name.includes(searchVal);
    });
    if (searchResult?.length) {
      return searchResult;
    } else {
      return null;
    }
  }
};
